import { SectionLinksSidebarProps } from 'northants-design-system/build/library/structure/SectionLinksSidebar/SectionLinksSidebar.types';
import { SectionParentLink } from './__generated__/SectionParentLink';
import { SectionPages } from './__generated__/SectionPages';
import slug from '../Section/slug';

export function transformInThisSection(from: SectionPages, pageID: string): SectionLinksSidebarProps {
  return {
    Title: 'Pages in this section',
    Sections: [
      {
        SectionTitle: from.name,
        SectionLinks: from.pages.map(({ title, url, id }) => ({ title, url, isCurrent: pageID === id })),
      },
    ],
  };
}

export function transformAlsoFoundIn(otherSections: SectionParentLink[]): SectionLinksSidebarProps {
  return {
    Title: 'Also found in',
    Sections: [
      {
        SectionLinks: otherSections.map(({ name, parent }) => {
          const url = `${parent.url}#${slug(name)}`;
          return { title: name, url: url.toString() };
        }),
      },
    ],
  };
}