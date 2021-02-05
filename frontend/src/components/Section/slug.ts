/**
 * Converts a section name to a slug suitable for use as a html element id.
 * Converts to lowercase and replaces whitespace with a '-'
 * E.g 'Section A' -> 'section-a'
 * @param name
 */
export default function sectionSlug(name: string): string {
  return name.toLowerCase().replace(/[^A-Za-z\w\-:.]+/g, '-');
}
