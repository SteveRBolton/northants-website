import { AccordionSectionProps } from 'northants-design-system/build/library/slices/Accordion/Accordion.types';
import { Accordion_sections } from './__generated__/Accordion';

export default (accordion: Accordion_sections): AccordionSectionProps => {
  return {
    accordionSectionId: parseInt(accordion.id, 10),
    title: accordion.title,
    summary: accordion.summary ?? undefined,
    content: accordion.body,
    isExpanded: false,
  };
};
