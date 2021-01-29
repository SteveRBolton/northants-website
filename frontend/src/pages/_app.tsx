import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import { Header, north_theme, GDS_theme, west_theme, Footer } from 'northants-design-system';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import { GetCMSGlobals } from '../api/graphql/__generated__/GetCMSGlobals';
import { getCMSGlobals } from '../api/graphql/queries';
import '../css/reset.css';
import { initializeApollo } from '../lib/apolloClient';

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
}: AppProps & GetCMSGlobals & { theme: Theme }): ReactElement {
  let actualThemeObject;
  let faviconPath = '/favicon/';

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

  const isHomePage = router.pathname === '/';
  return (
    <>
      <Head>
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
        <Header isHomepage={isHomePage} allServicesLink="/" homeLink="/" />
        <Component {...pageProps} />
        <Footer footerLinksArray={globals.footerLinks} year={new Date().getFullYear().toString()} />
      </ThemeProvider>
    </>
  );
}

NorthantsApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & GetCMSGlobals & { theme: Theme }> => {
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
  return { ...appProps, globals, theme: process.env.NEXT_PUBLIC_THEME as Theme };
};

export default NorthantsApp;
