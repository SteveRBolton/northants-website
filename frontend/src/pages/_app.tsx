import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import { Header, north_theme, GDS_theme, west_theme, Footer } from 'northants-design-system';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import Link from 'next/link';
import { GetCMSGlobals } from '../api/graphql/__generated__/GetCMSGlobals';
import { getCMSGlobals } from '../api/graphql/queries';
import '../css/reset.css';
import { initializeApollo } from '../lib/apolloClient';

function NorthantsApp({ Component, pageProps, router, globals }: AppProps & GetCMSGlobals): ReactElement {
  // const theme = process.env.NEXT_PUBLIC_THEME
  //   ? { north: north_theme, west: west_theme, gds: GDS_theme }[process.env.NEXT_PUBLIC_THEME]
  //   : GDS_theme;

  const theme = west_theme;

  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>Northants</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Header isHomepage={isHomePage} allServicesLink="/" homeLink="/" />
        <Component {...pageProps} />
        <ul>
          <li>
            <Link href="/service-page-test" shallow={false}>
              <a>Service page test</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Home page</a>
            </Link>
          </li>
        </ul>
        <Footer footerLinksArray={globals.footerLinks} year={new Date().getFullYear().toString()} />
      </ThemeProvider>
    </>
  );
}

NorthantsApp.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps & GetCMSGlobals> => {
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
  return { ...appProps, globals };
};

export default NorthantsApp;
