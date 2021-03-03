import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import { Header, north_theme, GDS_theme, west_theme, Footer, CookieBanner } from 'northants-design-system';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement, useEffect } from 'react';
import { GetCMSGlobals } from '../api/graphql/__generated__/GetCMSGlobals';
import { getCMSGlobals, getSearchResults } from '../api/graphql/queries';
import '../css/reset.css';
import { initializeApollo } from '../lib/apolloClient';
import { GetSearchResults, GetSearchResultsVariables } from '../api/graphql/__generated__/GetSearchResults';

declare global {
  interface Window {
    dataLayer: [
      {
        'event': string;
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
}: AppProps & GetCMSGlobals & { theme: Theme; gtm: string | undefined }): ReactElement {
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
  switch (theme) {
    case Theme.North:
      actualThemeObject = north_theme;
      faviconPath += Theme.North;
      break;
    case Theme.West:
      actualThemeObject = west_theme;
      faviconPath += Theme.West;
      break;
    default:
      actualThemeObject = GDS_theme;
  }

  const hideSearchBar = router.pathname === '/search';
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
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href={`${faviconPath}/favicon-16x16.png`}
          color={theme === 'north' ? '#05873a' : '#386193'}
        />
        <meta name="msapplication-TileColor" content={theme === 'north' ? '#05873a' : '#386193'} />
        <meta name="theme-color" content="#ffffff" />
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
        <Header hideSearchBar={hideSearchBar} allServicesLink="/" homeLink="/" />
        <Component {...pageProps} />
        <Footer footerLinksArray={globals.footerLinks} year={new Date().getFullYear().toString()} />
      </ThemeProvider>
    </>
  );
}

NorthantsApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & GetCMSGlobals & { theme: Theme; gtm: string | undefined }> => {
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

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, globals, theme: process.env.NEXT_PUBLIC_THEME as Theme, gtm: process.env.NEXT_PUBLIC_GTM_CODE };
};

export default NorthantsApp;
