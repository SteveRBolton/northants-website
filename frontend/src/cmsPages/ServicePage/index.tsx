import {
  Breadcrumbs,
  MaxWidthContainer,
  PhaseBanner,
  PageMain,
  SignpostLinks,
  SectionLinksSidebar,
  PageWithSidebarContainer,
  PageSidebar,
  Heading,
  WarningTextDisclaimer,
  DisplayDate,
  AlertBannerService,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { SignpostLinksProps } from 'northants-design-system/build/library/structure/SignpostLinks/SignpostLinks.types';
import { SectionLinksSidebarProps } from 'northants-design-system/build/library/structure/SectionLinksSidebar/SectionLinksSidebar.types';
import { BreadcrumbsProps } from 'northants-design-system/build/library/structure/Breadcrumbs/Breadcrumbs.types';
import { AlertBannerServiceProps } from 'northants-design-system/build/library/structure/AlertBannerService/AlertBannerService.types';

import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';
import AlertBannerServiceIE from '../../components/AlertBannerService';

type ServicePageProps = {
  title: string;
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  url: string;
  body: TextWithSlicesProps;
  signposting?: SignpostLinksProps;
  breadcrumbs: BreadcrumbsProps;
  inThisSection?: SectionLinksSidebarProps;
  alsoIn?: SectionLinksSidebarProps;
  warningTextDisclaimer: boolean;
  topLineText?: string;
  dateUpdated: string;
  serviceAlert: AlertBannerServiceProps;
};
export default function ServicePage({
  title,
  metaTitle,
  metaDescription,
  metaKeywords,
  body,
  signposting,
  breadcrumbs,
  inThisSection,
  alsoIn,
  warningTextDisclaimer,
  topLineText,
  dateUpdated,
  serviceAlert,
}: ServicePageProps): ReactElement {
  /* At least one defined sidebar element */

  const showSidebar = [inThisSection, alsoIn].filter((s) => s !== undefined).length > 0;
  const main = (
    <PageMain>
      <AlertBannerServiceIE />
      {serviceAlert?.title && (
        <AlertBannerService {...serviceAlert}>
          {serviceAlert.children && <TextWithSlices html={serviceAlert.children} embeds={[]} />}
        </AlertBannerService>
      )}
      <Heading level={1} text={title} />
      <TextWithSlices {...body} />
      {signposting && <SignpostLinks {...signposting} TopLineText={topLineText} />}
      {warningTextDisclaimer && <WarningTextDisclaimer />}
    </PageMain>
  );

  const sidebar = (
    <PageSidebar>
      {inThisSection && <SectionLinksSidebar {...inThisSection} />}
      {alsoIn && <SectionLinksSidebar {...alsoIn} />}
    </PageSidebar>
  );

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
        {showSidebar && (
          <PageWithSidebarContainer>
            {main}
            {sidebar}
          </PageWithSidebarContainer>
        )}
        {!showSidebar && main}
        <DisplayDate preText="Last updated " text={dateUpdated} format="X" />
      </MaxWidthContainer>
    </>
  );
}
