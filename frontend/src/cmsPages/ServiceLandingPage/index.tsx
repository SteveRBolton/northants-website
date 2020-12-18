import { Heading, MaxWidthContainer, PageMain, SectionLinks } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { SectionLinksProps } from 'northants-design-system/build/library/structure/SectionLinks/SectionLinks.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type HeadingProps = {
  level: 1;
  text: string;
};

type ServiceLandingPageProps = {
  title: string;
  heading: HeadingProps;
  body: TextWithSlicesProps;
  sections: SectionLinksProps[];
};

export default function ServiceLandingPage({ title, heading, body, sections }: ServiceLandingPageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <PageMain>
          <Heading {...heading} />
          <TextWithSlices {...body} />
          {sections.map((section) => (
            <SectionLinks {...section} />
          ))}
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
