import React, { ReactElement } from 'react';
import parse, { DomElement, domToReact } from 'html-react-parser';
import { BlockQuote, CallToAction, Heading, Divider } from 'northants-design-system';
import { EmbeddedParagraph, EmbeddedParagraph_paragraph } from './__generated__/EmbeddedParagraph';

/**
 * Render a slice from its GraphQL object representation.
 *
 * @param paragraph
 */
const renderParagraph = (paragraph: EmbeddedParagraph_paragraph): ReactElement => {
  switch (paragraph.__typename) {
    case 'CallToActionParagraph':
      return <CallToAction text={paragraph.link.title} url={paragraph.link.url} isExternal={paragraph.link.external} />;
    case 'BlockQuoteParagraph':
      return <BlockQuote quote={paragraph.quote} citation={paragraph.citation ?? undefined} />;
    default:
      return <p>TODO: Implement Paragraph rendering for paragraph type {paragraph.__typename}</p>;
  }
};

export type TextWithSlicesProps = {
  html: string;
  embeds: EmbeddedParagraph[];
};

const TextWithSlices = ({ html, embeds }: TextWithSlicesProps): ReactElement => {
  const processed = parse(html, {
    replace: (domNode) => {
      /**
       * Get all text in this DOM node or any of its children.
       * Needed because headings may contain bold/italic tags and we want to ignore them.
       * E.g <h2><b>text<b><h2> => <h2>text</h2>
       *
       * @param node
       */

      const getText = (node: DomElement): string => {
        if (node.type === 'text') {
          return node.data;
        }
        if (node.children) {
          return node.children.map(getText).join('');
        }
        return '';
      };

      if (domNode.name === 'h2' && domNode.children) {
        return <Heading level={2} text={getText(domNode)} />;
      }

      if (domNode.name === 'h3' && domNode.children) {
        return <Heading level={3} text={getText(domNode)} />;
      }

      if (domNode.name === 'h4' && domNode.children) {
        return <Heading level={4} text={getText(domNode)} />;
      }

      if (domNode.name === 'table' && domNode.children) {
        /* Wrap tables in a div so design system can apply additional styling */
        return (
          <div className="table-container">
            {React.createElement(domNode.name, { ...domNode.attribs }, domToReact(domNode.children))}
          </div>
        );
      }

      /* Replace <hr> with custom React component from design system. */
      if (domNode.name === 'hr') {
        return <Divider />;
      }

      if (domNode.name === 'drupal-paragraph') {
        if (domNode.attribs?.['data-paragraph-id']) {
          const embedded = embeds.find(({ id }) => id === domNode.attribs?.['data-paragraph-id']);
          if (embedded) {
            const { paragraph } = embedded;
            return renderParagraph(paragraph);
          }
        }
      }

      if (domNode.children && domNode.name) {
        return React.createElement(domNode.name, { ...domNode.attribs }, domToReact(domNode.children));
      }
      return <></>;
    },
  });

  return <>{processed}</>;
};

export default TextWithSlices;
