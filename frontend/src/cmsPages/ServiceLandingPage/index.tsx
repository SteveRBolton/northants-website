import {
  Breadcrumbs,
  Heading,
  MaxWidthContainer,
  PhaseBanner,
  PageMain,
  SectionLinks,
  SectionLinksMobileContents,
  HeadingWithIcon,
  AlertBannerService,
  DisplayDate,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { BreadcrumbsProps } from 'northants-design-system/build/library/structure/Breadcrumbs/Breadcrumbs.types';
import { SectionLinksProps } from 'northants-design-system/build/library/structure/SectionLinks/SectionLinks.types';
import { AlertBannerServiceProps } from 'northants-design-system/build/library/structure/AlertBannerService/AlertBannerService.types';

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
  icon?: string;
  serviceAlert?: AlertBannerServiceProps;
  dateUpdated: string;
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
  icon,
  serviceAlert,
  dateUpdated,
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
        {console.log({ serviceAlert })}
        {console.log({ breadcrumbs })}

        <PhaseBanner />
        <Breadcrumbs {...breadcrumbs} />

        <PageMain>
          <AlertBannerServiceIE />

          {serviceAlert?.title && (
            <AlertBannerService {...serviceAlert}>
              {serviceAlert.children && <TextWithSlices html={serviceAlert.children} embeds={[]} />}
            </AlertBannerService>
          )}

          {icon ? <HeadingWithIcon icon={icon} level={1} text={heading.text} /> : <Heading {...heading} />}
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
        <DisplayDate preText="Last updated " text={dateUpdated} format="X" />
      </MaxWidthContainer>
    </>
  );
}
