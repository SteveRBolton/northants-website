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
  MemorialHero,
  Header,
  PromotedLinks,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import {
  PageLinkProp,
  ServicesLinksListProps,
} from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';
import { NewsArticleFeaturedBlockProps } from 'northants-design-system/build/library/structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.types';
import { PromoBannerProps } from 'northants-design-system/build/library/structure/PromoBanner/PromoBanner.types';
import { HeroImageProp } from 'northants-design-system/build/library/structure/HomeHero/HomeHero.types';
import { ThemeProvider } from 'styled-components';
import { LinksProp } from 'northants-design-system/build/library/structure/SectionLinksSidebar/SectionLinksSidebar.types';
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
  memorialImages: HeroImageProp[];
  memorialQuickLinks: ServicesLinksListProps;
  memorialCondolenceLink: LinksProp;
  memorialSummary: string;
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
  memorialImages,
  memorialQuickLinks,
  memorialCondolenceLink,
  memorialSummary,
}: MemorialHomepageProps): ReactElement {
  console.log(memorialCondolenceLink);
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
      <ThemeProvider theme={process.env.NEXT_PUBLIC_THEME === 'north' ? lb_theme_north : lb_theme_west}>
        <Header />
      </ThemeProvider>

      <ThemeProvider theme={process.env.NEXT_PUBLIC_THEME === 'north' ? lb_theme_north : lb_theme_west}>
        <MaxWidthContainer>
          <PhaseBanner />
        </MaxWidthContainer>

        <MemorialHero
          src={memorialImages[0].image1440x810}
          theme={process.env.NEXT_PUBLIC_THEME === 'north' ? lb_theme_north : lb_theme_west}
          councilServices={
            <PromotedLinks
              oneCol
              promotedLinksArray={[
                {
                  title: 'Proceed to Council services',
                  url: '#main',
                },
              ]}
            />
          }
          children={
            <ServicesLinksList
              hasBackground
              hideHeader
              serviceLinksArray={[
                {
                  title: memorialCondolenceLink[0].title,
                  url: memorialCondolenceLink[0].url,
                  iconKey: 'covid', // TODO this needs looking as its currently an image from the back end
                  quickLinksArray: [
                    {
                      title: memorialSummary,
                      url: memorialCondolenceLink[0].url,
                    },
                  ],
                },
              ]}
              oneCol
            />
          }
        />
      </ThemeProvider>

      <MaxWidthContainer>
        <ThemeProvider theme={process.env.NEXT_PUBLIC_THEME === 'north' ? lb_theme_north : lb_theme_west}>
          <NewsArticleFeaturedBlock {...memorialNewsLinks} />
        </ThemeProvider>
        <PageMain>
          <AlertBannerServiceIE />
          {body && <TextWithSlices {...body} />}
          <ServicesLinksList serviceLinksArray={serviceLinks} />
          {promoBanner ? (
            <ThemeProvider theme={process.env.NEXT_PUBLIC_THEME === 'north' ? lb_theme_north : lb_theme_west}>
              <PromoBanner
                title={promoBanner.title}
                ctaText={promoBanner.ctaText}
                ctaUrl={promoBanner.ctaUrl}
                image1440x810={promoBanner.image1440x810}
                image144x81={promoBanner.image144x81}
              >
                {promoBody && <TextWithSlices {...promoBody} />}
              </PromoBanner>
            </ThemeProvider>
          ) : (
            ''
          )}
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
