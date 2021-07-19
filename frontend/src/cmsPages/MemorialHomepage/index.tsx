import {
  MaxWidthContainer,
  PageMain,
  ServicesLinksList,
  PromoBanner,
  Breadcrumbs,
  PhaseBanner,
  NewsArticleFeaturedBlock,
  lb_theme_north,
  lb_theme_west,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { PageLinkProp } from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';
import { NewsArticleFeaturedBlockProps } from 'northants-design-system/build/library/structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.types';
import { PromoBannerProps } from 'northants-design-system/build/library/structure/PromoBanner/PromoBanner.types';
import { ThemeProvider } from 'styled-components';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';
import AlertBannerServiceIE from '../../components/AlertBannerService';

type MemorialHomepageProps = {
  body?: TextWithSlicesProps;
  serviceLinks: PageLinkProp[];
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  promoBanner?: PromoBannerProps;
  promoBody?: TextWithSlicesProps;
  memorialNewsLinks: NewsArticleFeaturedBlockProps;
};

export default function MemorialHomepage({
  body,
  serviceLinks,
  metaTitle,
  metaDescription,
  metaKeywords,
  promoBanner,
  promoBody,
  memorialNewsLinks,
}: MemorialHomepageProps): ReactElement {
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
      <div>&nbsp;</div>
      <MaxWidthContainer>
        <PhaseBanner />
        <Breadcrumbs
          breadcrumbsArray={[
            { title: 'Home', url: '/' },
            { title: 'News', url: '/news' },
          ]}
        />
        <ThemeProvider theme={process.env.NEXT_PUBLIC_THEME === 'north' ? lb_theme_north : lb_theme_west}>
          <NewsArticleFeaturedBlock {...memorialNewsLinks} />
        </ThemeProvider>
        <PageMain>
          <AlertBannerServiceIE />
          {body && <TextWithSlices {...body} />}
          <ServicesLinksList serviceLinksArray={serviceLinks} />
          {promoBanner ? (
            <PromoBanner
              title={promoBanner.title}
              ctaText={promoBanner.ctaText}
              ctaUrl={promoBanner.ctaUrl}
              image1440x810={promoBanner.image1440x810}
              image144x81={promoBanner.image144x81}
            >
              {promoBody && <TextWithSlices {...promoBody} />}
            </PromoBanner>
          ) : (
            ''
          )}
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}