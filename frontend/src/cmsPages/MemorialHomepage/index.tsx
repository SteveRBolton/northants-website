import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import {
  MaxWidthContainer,
  PageMain,
  ServicesLinksList,
  PromoBanner,
  Breadcrumbs,
  PhaseBanner,
  north_theme,
  GDS_theme,
  west_theme,
  lb_theme_north,
  lb_theme_west,
  Header,
  PageWrapper,
  MemorialHero,
  NewsArticleFeaturedBlock,
  PromotedLinks,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { PageLinkProp } from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';

import { PromoBannerProps } from 'northants-design-system/build/library/structure/PromoBanner/PromoBanner.types';
import { ThemeProvider } from 'styled-components';

import { initializeApollo } from '../../lib/apolloClient';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';
import AlertBannerServiceIE from '../../components/AlertBannerService';
import { GetCMSGlobals } from '../../api/graphql/__generated__/GetCMSGlobals';
import { getCMSGlobals } from '../../api/graphql/queries';

// unsure if needed
declare global {
  interface Window {
    dataLayer: [
      {
        event: string;
      }
    ];
  }
}
enum Theme {
  North = 'north',
  North_LB = 'lb_theme_north',
  West = 'west',
  West_LB = 'lb_theme_west',
  GDS = 'gds',
}

enum Website {
  North = 'north',
  West = 'west',
  GDS = 'gds',
}

type MemorialHomepageProps = {
  body?: TextWithSlicesProps;
  serviceLinks: PageLinkProp[];
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  promoBanner?: PromoBannerProps;
  promoBody?: TextWithSlicesProps;
};

function MemorialHomepage({
  body,
  serviceLinks,
  metaTitle,
  metaDescription,
  metaKeywords,
  promoBanner,
  promoBody,
  globals,
  theme,
}: AppProps &
  MemorialHomepageProps &
  GetCMSGlobals & {
    theme: Theme;
    website: Website;
  }): ReactElement {
  let actualThemeObject;
  console.log(theme);
  console.log(Theme);
  switch (theme) {
    case Theme.North:
      actualThemeObject = north_theme;
      break;
    case Theme.West:
      actualThemeObject = west_theme;
      break;
    case Theme.North_LB:
      actualThemeObject = lb_theme_north;
      break;
    case Theme.West_LB:
      actualThemeObject = lb_theme_west;
      break;
    default:
      actualThemeObject = GDS_theme;
  }
  const newsArticleData = {
    articles: [
      {
        id: '6036694e95f7c8c6729a46bf',
        url: '/',
        title: 'Veniam nostrud excepteur elit non cupidatat deserunt sunt amet ad ipsum sunt incididunt.',
        date: 1614178638,
        image720x405:
          'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/1440/810/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
        image72x41:
          'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/144/81/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
        imageAltText: 'The alt text',
      },
      {
        id: '6036694e71b8eedb00cff39f',
        url: '/',
        title: 'Non minim ad ullamco exercitation pariatur eu dolor occaecat ullamco culpa excepteur cillum irure.',
        date: 1614178638,
        image720x405:
          'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/1440/810/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
        image72x41:
          'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/144/81/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
        imageAltText: 'The alt text',
      },
      {
        id: '6036694ed3c1de9114024a02',
        url: '/',
        title: 'In sint incididunt dolor officia consectetur proident mollit exercitation magna.',
        excerpt:
          'Cillum occaecat eiusmod pariatur cillum Lorem sunt pariatur proident aliquip pariatur aute nostrud. Veniam aliqua qui id consectetur sit incididunt. Sint non voluptate adipisicing anim. Amet tempor id in adipisicing sunt. Aliquip dolore ipsum occaecat officia anim aliqua minim consequat Lorem ipsum.\r\n',
        date: 1614178638,
        image720x405:
          'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/1440/810/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
        image72x41:
          'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/144/81/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
        imageAltText: 'The alt text',
      },
    ],
  };
  const serviceLinksArray = [
    {
      title: 'Condolence book',
      url: '/',
      iconKey: 'covid',
      quickLinksArray: [
        {
          title: 'Sign the condolence book and leave a tribute',
          url: '/',
        },
      ],
    },
  ];
  const memorialServiceLinksArray = [
    {
      title: 'The Royal Website',
      url: '/',
      iconKey: 'covid',
      quickLinksArray: [
        {
          title: 'Details and announcements of the funeral of ...',
          url: '/',
        },
      ],
    },
    {
      title: 'Guidance for the Period of National Mourning',
      url: '/',
      iconKey: 'covid',
      quickLinksArray: [
        {
          title: 'Information and key links regarding national mourning',
          url: '/',
        },
      ],
    },
    {
      title: 'The Royal Website',
      url: '/',
      iconKey: 'covid',
      quickLinksArray: [
        {
          title: 'Details and announcements of the funeral of ...',
          url: '/',
        },
      ],
    },
  ];
  const ExampleMemorialHeroArgs = {
    src: 'http://placehold.it/1000x700',
    placeholder: 'http://placehold.it/250x175',
    alt: 'Image showing ...',
    children: <ServicesLinksList hasBackground hideHeader serviceLinksArray={serviceLinksArray} oneCol />,
    councilServices: (
      <PromotedLinks
        oneCol
        promotedLinksArray={[
          {
            title: 'Proceed to Council services',
            url: '/',
          },
        ]}
      />
    ),
    theme: actualThemeObject,
  };

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
      <ThemeProvider theme={actualThemeObject}>
        <Header />
        <MemorialHero {...ExampleMemorialHeroArgs} />

        <PageWrapper colour="grey_light">
          <MaxWidthContainer noBackground>
            <ServicesLinksList hideHeader serviceLinksArray={memorialServiceLinksArray} />
            <NewsArticleFeaturedBlock articles={newsArticleData.articles} viewAllLink="/news/" />
          </MaxWidthContainer>
        </PageWrapper>
      </ThemeProvider>
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
MemorialHomepage.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & GetCMSGlobals & { theme: Theme; website: Website }> => {
  const client = initializeApollo();
  console.log('CALLED');
  // Get globals
  const globals = await client
    .query<GetCMSGlobals>({
      query: getCMSGlobals,
      variables: {},
    })
    .then((res) => {
      console.error('HERE');
      console.log(res.data);
      return res.data.globals;
    });

  // set cache for use with Cloudflare
  if (process.env.NODE_ENV !== 'development') {
    if (appContext.ctx && appContext.ctx.res) {
      appContext.ctx.res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
    globals,
    theme: process.env.NEXT_PUBLIC_THEME as Theme,
    website: process.env.NEXT_PUBLIC_WEBSITE as Website,
  };
};

export default MemorialHomepage;
