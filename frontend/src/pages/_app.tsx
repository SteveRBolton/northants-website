import App, { AppProps, AppContext } from 'next/app';
import { Header, north_theme, GDS_theme, west_theme } from 'northants-design-system';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';

function NorthantsApp({ Component, pageProps, router }: AppProps): ReactElement {
  const theme = process.env.NEXT_PUBLIC_THEME
    ? { north: north_theme, west: west_theme, gds: GDS_theme }[process.env.NEXT_PUBLIC_THEME]
    : GDS_theme;

  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>Northants</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Header isHomepage={isHomePage} allServicesLink="/" homeLink="/" />
        <Component {...pageProps} />
        <div>TODO: Footer </div>
      </ThemeProvider>
    </>
  );
}

NorthantsApp.getInitialProps = async (appContext: AppContext) => {
  // TODO: Query for global drupal data.

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default NorthantsApp;
