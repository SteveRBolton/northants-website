import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import {
  Header,
  north_theme,
  GDS_theme,
  west_theme,
  lb_theme_north,
  lb_theme_west,
  Footer,
  CookieBanner,
  AlertBanner,
} from 'northants-design-system';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement, useEffect } from 'react';
import { GetCMSGlobals } from '../api/graphql/__generated__/GetCMSGlobals';
import { getCMSGlobals } from '../api/graphql/queries';
import '../css/reset.css';
import { initializeApollo } from '../lib/apolloClient';
import TextWithSlices from '../components/TextWithSlices';

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
  West = 'west',
  GDS = 'gds',
}

function NorthantsApp({
  Component,
  pageProps,
  router,
  globals,
  theme,
  gtm,
  baseUrl,
}: AppProps & GetCMSGlobals & { theme: Theme; gtm: string | undefined; baseUrl: string | undefined }): ReactElement {
  let actualThemeObject;
  let faviconPath = '/favicon/';
  useEffect(() => {
    if (document.cookie.includes('"cookiesAccepted":true')) {
      if (gtm) {
        window.dataLayer.push({
          event: 'consent_given',
        });
      }
    }
  }, []);
  let route = '';
  let shareImageSet = false;
  if (typeof window !== 'undefined') {
    route = window.location.pathname;
    shareImageSet = !!document.querySelector('meta[property="og:image"]');
  }
  switch (theme) {
    case Theme.North:
      actualThemeObject = lb_theme_north;
      // actualThemeObject = north_theme;
      faviconPath += Theme.North;
      break;
    case Theme.West:
      actualThemeObject = lb_theme_west;
      // actualThemeObject = west_theme;
      faviconPath += Theme.West;
      break;
    default:
      actualThemeObject = GDS_theme;
  }

  const hideSearchBar = router.pathname === '/search';
  const isHomepage = router.pathname === '/';

  const formattedBaseUrl = baseUrl?.replace(/\/$/, '');
  const pageUrl = formattedBaseUrl ? formattedBaseUrl + route : '';
  const genericMetaImage =
    theme === 'north' ? `${formattedBaseUrl}/north-share.png` : `${formattedBaseUrl}/west-share.png`;
  const defaultShareImage = <meta property="og:image" content={genericMetaImage} />;

  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        {gtm && (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','${gtm}');`,
            }}
          />
        )}
        {/* End Google Tag Manager */}
        <title>Northants</title>

        <link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${faviconPath}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${faviconPath}/favicon-16x16.png`} />
        <link rel="manifest" href={`${faviconPath}/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${faviconPath}/favicon-16x16.png`}
          color={theme === 'north' ? '#05873a' : '#386193'}
        />
        <meta name="msapplication-TileColor" content={theme === 'north' ? '#05873a' : '#386193'} />
        <meta name="msapplication-config" content={`${faviconPath}/browserconfig.xml`} />
        <meta name="theme-color" content="#ffffff" />

        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        {/* Check whether the page has set the image, if not use the default */}
        {shareImageSet ? '' : defaultShareImage}
        {/* Twitter tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        {/* Check whether the page has set the image, if not use the default */}
        {shareImageSet ? '' : defaultShareImage}
      </Head>
      <ThemeProvider theme={actualThemeObject}>
        <CookieBanner
          title="Tell us whether you accept cookies"
          paragraph={
            <p>
              We use <a href="/your-council/cookies">cookies to collect information</a> about how you use this website.
              We use this information to make it work as well as possible and help make improvements.
            </p>
          }
          acceptButtonText="Accept all cookies"
          rejectButtonText="Reject all cookies"
          acceptCallback={() => {}}
        />
        {globals.sitewideAlerts ? (
          <AlertBanner
            title={globals.sitewideAlerts.title}
            uid={globals.sitewideAlerts.id}
            alertType={globals.sitewideAlerts.alertType ? globals.sitewideAlerts.alertType : undefined}
          >
            <TextWithSlices html={globals.sitewideAlerts.body.value} embeds={[]} />
          </AlertBanner>
        ) : (
          ''
        )}
        {!isHomepage && <Header hideSearchBar={hideSearchBar} allServicesLink="/" homeLink="/" />}
        <Component {...pageProps} />
        <Footer footerLinksArray={globals.footerLinks} year={new Date().getFullYear().toString()} />
      </ThemeProvider>
    </>
  );
}

NorthantsApp.getInitialProps = async (
  appContext: AppContext
): Promise<
  AppInitialProps & GetCMSGlobals & { theme: Theme; gtm: string | undefined; baseUrl: string | undefined }
> => {
  const client = initializeApollo();

  // Get globals
  const globals = await client
    .query<GetCMSGlobals>({
      query: getCMSGlobals,
      variables: {},
    })
    .then((res) => {
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
    gtm: process.env.NEXT_PUBLIC_GTM_CODE,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  };
};

export default NorthantsApp;
