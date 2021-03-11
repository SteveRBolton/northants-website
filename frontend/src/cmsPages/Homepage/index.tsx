import {
  MaxWidthContainer,
  PageMain,
  ServicesLinksList,
  HomeHero,
  HomeUnitarySection,
  PromoBanner,
  NewsArticleFeaturedBlock,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import {
  HeroImageProp,
  PromotedLinkProp,
} from 'northants-design-system/build/library/structure/HomeHero/HomeHero.types';
import { PageLinkProp } from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';
import { NewsArticleFeaturedBlockProps } from 'northants-design-system/build/library/structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.types';

import { PromoBannerProps } from 'northants-design-system/build/library/structure/PromoBanner/PromoBanner.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type HomepageProps = {
  body?: TextWithSlicesProps;
  serviceLinks: PageLinkProp[];
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  heroImages: HeroImageProp[];
  promotedLinks: PromotedLinkProp[];
  promoBanner?: PromoBannerProps;
  promoBody?: TextWithSlicesProps;
  featuredNews: NewsArticleFeaturedBlockProps;
};

export default function Homepage({
  body,
  serviceLinks,
  metaTitle,
  metaDescription,
  metaKeywords,
  heroImages,
  promotedLinks,
  promoBanner,
  promoBody,
  featuredNews,
}: HomepageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        {metaDescription ? <meta name="description" content={metaDescription} /> : ''}
        {metaKeywords ? <meta name="keywords" content={metaKeywords} /> : ''}
      </Head>
      <HomeHero imagesArray={heroImages} promotedLinksArray={promotedLinks} />
      <MaxWidthContainer>
        <PageMain>
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
          <HomeUnitarySection />
          <NewsArticleFeaturedBlock {...featuredNews} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
