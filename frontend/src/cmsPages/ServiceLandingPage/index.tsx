import {
  Breadcrumbs,
  Heading,
  MaxWidthContainer,
  PhaseBanner,
  PageMain,
  SectionLinks,
  SectionLinksMobileContents,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { BreadcrumbsProps } from 'northants-design-system/build/library/structure/Breadcrumbs/Breadcrumbs.types';
import { SectionLinksProps } from 'northants-design-system/build/library/structure/SectionLinks/SectionLinks.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';
import AlertBannerServiceIE from '../../components/AlertBannerService';

type HeadingProps = {
  level: 1;
  text: string;
};

type ServiceLandingPageProps = {
  title: string;
  url: string;
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  heading: HeadingProps;
  body?: TextWithSlicesProps;
  breadcrumbs: BreadcrumbsProps;
  sections: SectionLinksProps[];
};

export default function ServiceLandingPage({
  url,
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

        {/* Facebook tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription || ''} />

        {/* Twitter tags */}
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription || ''} />
      </Head>
      <MaxWidthContainer>
        <PhaseBanner />
        <Breadcrumbs {...breadcrumbs} />
        <PageMain>
          <AlertBannerServiceIE />
          <Heading {...heading} />
          {body && <TextWithSlices {...body} />}
          {sections.length > 1 ? (
            <SectionLinksMobileContents
              sectionLinksArray={sections.map((section) => ({ id: section.sectionSlug, title: section.sectionTitle }))}
            />
          ) : (
            ''
          )}
          {sections.map((section) => (
            <SectionLinks {...section} />
          ))}
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}