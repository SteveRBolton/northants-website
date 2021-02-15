import { Breadcrumbs, Heading, MaxWidthContainer, PhaseBanner, PageMain, SectionLinks } from 'northants-design-system';
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
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  heading: HeadingProps;
  body?: TextWithSlicesProps;
  breadcrumbs: BreadcrumbsProps;
  sections: SectionLinksProps[];
};

export default function ServiceLandingPage({
  title,
  metaTitle,
  metaDescription,
  metaKeywords,
  heading,
  body,
  breadcrumbs,
  sections,
}: ServiceLandingPageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        {metaDescription ? <meta name="description" content={metaDescription} /> : ''}
        {metaKeywords ? <meta name="keywords" content={metaKeywords} /> : ''}
      </Head>
      <MaxWidthContainer>
        <PhaseBanner />
        <Breadcrumbs {...breadcrumbs} />
        <PageMain>
          <Heading {...heading} />
          {body && <TextWithSlices {...body} />}
          {sections.map((section) => (
            <SectionLinks {...section} />
          ))}
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
