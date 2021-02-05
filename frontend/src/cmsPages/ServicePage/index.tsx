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
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { SignpostLinksProps } from 'northants-design-system/build/library/structure/SignpostLinks/SignpostLinks.types';
import { SectionLinksSidebarProps } from 'northants-design-system/build/library/structure/SectionLinksSidebar/SectionLinksSidebar.types';
import { BreadcrumbsProps } from 'northants-design-system/build/library/structure/Breadcrumbs/Breadcrumbs.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type ServicePageProps = {
  title: string;
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  body: TextWithSlicesProps;
  signposting?: SignpostLinksProps;
  breadcrumbs: BreadcrumbsProps;
  inThisSection?: SectionLinksSidebarProps;
  alsoIn?: SectionLinksSidebarProps;
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
}: ServicePageProps): ReactElement {
  /* At least one defined sidebar element */
  const showSidebar = [inThisSection, alsoIn].filter((s) => s !== undefined).length > 0;

  const main = (
    <PageMain>
      <Heading level={1} text={title} />
      <TextWithSlices {...body} />
      {signposting && <SignpostLinks {...signposting} />}
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
      </MaxWidthContainer>
    </>
  );
}
