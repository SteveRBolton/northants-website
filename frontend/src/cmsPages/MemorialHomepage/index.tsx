import {
  MaxWidthContainer,
  PageMain,
  ServicesLinksList,
  PromoBanner,
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
  MemorialQuickLinkProp,
  PageLinkProp,
} from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';
import { NewsArticleFeaturedBlockProps } from 'northants-design-system/build/library/structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.types';
import { PromoBannerProps } from 'northants-design-system/build/library/structure/PromoBanner/PromoBanner.types';
import { HeroImageProp } from 'northants-design-system/build/library/structure/HomeHero/HomeHero.types';
import { ThemeProvider } from 'styled-components';
import { LinksProp } from 'northants-design-system/build/library/structure/SectionLinksSidebar/SectionLinksSidebar.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';
import AlertBannerServiceIE from '../../components/AlertBannerService';
import {
  GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialCondolenceLink,
  GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialQuickLinks,
} from '../../api/graphql/__generated__/GetCMSContentOrRedirect';

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
  memorialQuickLinks: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialQuickLinks[] | null;
  memorialCondolenceLink: GetCMSContentOrRedirect_route_DrupalNodeRoute_node_HomepageNode_memorialCondolenceLink | null;
  memorialSummary: string | null;
  memorialIcon: string | null;
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
  memorialIcon,
}: MemorialHomepageProps): ReactElement {
  const memorialServiceLinks: PageLinkProp[] = [];
  if (memorialQuickLinks != null) {
    memorialQuickLinks.forEach((element) => {
      if (element != null && element.link != null && element.icon != null && element.summary != null) {
        const item: PageLinkProp = {
          title: element.link.title,
          url: element.link.url,
          iconKey: element.icon,
          quickLinksArray: [
            {
              title: element.summary,
              url: element.link.url,
            },
          ],
        };
        memorialServiceLinks.push(item);
      }
    });
  }
  const condolenceLinkArray: PageLinkProp[] = [];
  if (
    memorialCondolenceLink != null &&
    memorialCondolenceLink.title != null &&
    memorialSummary != null &&
    memorialIcon != null
  ) {
    condolenceLinkArray.push({
      title: memorialCondolenceLink.title,
      url: memorialCondolenceLink.url,
      iconKey: memorialIcon,
      quickLinksArray: [
        {
          title: memorialSummary,
          url: memorialCondolenceLink.url,
        },
      ],
    });
  }

  if (memorialImages.length == 0) {
    memorialImages = [{ image1440x810: '', image144x81: '' }];
  }

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
      <ThemeProvider theme={process.env.NEXT_PUBLIC_THEME === 'north' ? lb_theme_north : lb_theme_west}>
        <Header />
      </ThemeProvider>

      <ThemeProvider theme={process.env.NEXT_PUBLIC_THEME === 'north' ? lb_theme_north : lb_theme_west}>
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
          placeholder="" // todo add values to these
          alt=""
          children={
            <ServicesLinksList
              hasBackground
              hideHeader
              serviceLinksArray={condolenceLinkArray}
              oneCol
              serviceId="condolence-link"
            />
          }
        />
      </ThemeProvider>

      <MaxWidthContainer>
        <ThemeProvider theme={process.env.NEXT_PUBLIC_THEME === 'north' ? lb_theme_north : lb_theme_west}>
          <ServicesLinksList hideHeader serviceLinksArray={memorialServiceLinks} serviceId="memorial-news" />
          <NewsArticleFeaturedBlock {...memorialNewsLinks} viewAllLink="/news" />

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
        </ThemeProvider>
      </MaxWidthContainer>
    </>
  );
}
