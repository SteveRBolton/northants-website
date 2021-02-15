import { MaxWidthContainer, PhaseBanner, PageMain, ServicesLinksList } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { PageLinkProp } from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type HomepageProps = {
  body?: TextWithSlicesProps;
  serviceLinks: PageLinkProp[];
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
};

export default function Homepage({
  body,
  serviceLinks,
  metaTitle,
  metaDescription,
  metaKeywords,
}: HomepageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        {metaDescription ? <meta name="description" content={metaDescription} /> : ''}
        {metaKeywords ? <meta name="keywords" content={metaKeywords} /> : ''}
      </Head>
      <MaxWidthContainer>
        <PhaseBanner />
        <PageMain>
          {body && <TextWithSlices {...body} />}
          <ServicesLinksList serviceLinksArray={serviceLinks} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
