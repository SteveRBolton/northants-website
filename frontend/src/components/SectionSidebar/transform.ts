import { SectionLinksSidebarProps } from 'northants-design-system/build/library/structure/SectionLinksSidebar/SectionLinksSidebar.types';
import { SidebarSection } from './__generated__/SidebarSection';

export default function transformInThisSection(from: SidebarSection, pageID: string): SectionLinksSidebarProps {
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
