import { SectionLinksProps } from 'northants-design-system/build/library/structure/SectionLinks/SectionLinks.types';
import { Section } from './__generated__/Section';
import slug from './slug';

export default function transform({ name, pages }: Section, displayTitle: boolean): SectionLinksProps {
  return {
    sectionTitle: name,
    sectionSlug: slug(name),
    pageLinksArray: pages,
    displayTitle,
  };
}
