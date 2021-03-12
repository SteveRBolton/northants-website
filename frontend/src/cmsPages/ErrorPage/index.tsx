import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Heading, MaxWidthContainer, PageMain, PageTitle, PhaseBanner } from 'northants-design-system';

type ErrorPageProps = {
  pageTitle: string;
  errorCode: string;
};

export default function ErrorPage({ pageTitle, errorCode }: ErrorPageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <MaxWidthContainer>
        <PhaseBanner />
        <PageMain>
          <PageTitle>
            <Heading level={1} text={pageTitle} />
          </PageTitle>
          <p>If you entered a web address, check it is correct.</p>

          <p>
            You can <a href="/"> see a list of council services on the homepage </a> or use the search box above to find
            the information you need.
          </p>

          <p>
            You can also <a href="/">learn more about this new unitary council website.</a>
          </p>
          <br />
          <pre>Error code: {errorCode}</pre>
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
