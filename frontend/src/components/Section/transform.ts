import { SectionLinksProps } from 'northants-design-system/build/library/structure/SectionLinks/SectionLinks.types';
import { Section } from './__generated__/Section';

export default function transform({ name, pages }: Section): SectionLinksProps {
  return {
    sectionTitle: name,
    sectionSlug: name.toLowerCase().replace(/\s/, '-'),
    pageLinksArray: pages,
  };
}
