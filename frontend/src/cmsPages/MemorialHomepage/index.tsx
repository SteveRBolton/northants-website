import {
  MaxWidthContainer,
  PageMain,
  HomeHero,
  ServicesLinksList,
  PromoBanner,
  Breadcrumbs,
  PhaseBanner,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import {
  HeroImageProp,
  PromotedLinkProp,
} from 'northants-design-system/build/library/structure/HomeHero/HomeHero.types';
import { PageLinkProp } from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';

import { PromoBannerProps } from 'northants-design-system/build/library/structure/PromoBanner/PromoBanner.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';
import AlertBannerServiceIE from '../../components/AlertBannerService';

type MemorialHomepageProps = {
  body?: TextWithSlicesProps;
  serviceLinks: PageLinkProp[];
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  heroImages: HeroImageProp[];
  promotedLinks: PromotedLinkProp[];
  promoBanner?: PromoBannerProps;
  promoBody?: TextWithSlicesProps;
};

export default function MemorialHomepage({
  body,
  serviceLinks,
  metaTitle,
  metaDescription,
  metaKeywords,
  promoBanner,
  promoBody,
  promotedLinks,
  heroImages,
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
      {/* <HomeHero imagesArray={heroImages} promotedLinksArray={promotedLinks} /> */}
      <div>OK</div>
      <MaxWidthContainer>
        <PhaseBanner />
        <Breadcrumbs
          breadcrumbsArray={[
            { title: 'Home', url: '/' },
            { title: 'News', url: '/news' },
          ]}
        />
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
