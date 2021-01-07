import { Breadcrumbs, Heading, MaxWidthContainer, PageMain, SectionLinks } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { BreadcrumbsProps } from 'northants-design-system/build/library/structure/Breadcrumbs/Breadcrumbs.types';
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
  breadcrumbs: BreadcrumbsProps;
  sections: SectionLinksProps[];
};

export default function ServiceLandingPage({
  title,
  heading,
  body,
  breadcrumbs,
  sections,
}: ServiceLandingPageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <Breadcrumbs {...breadcrumbs} />
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
