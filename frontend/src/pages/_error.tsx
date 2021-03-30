import { NextPageContext } from 'next';
import React, { ReactElement } from 'react';
import ErrorPage from '../cmsPages/ErrorPage';

type ErrorProps = {
  statusCode: number | undefined;
};

export default function Error({ statusCode }: ErrorProps): ReactElement {
  return (
    <ErrorPage
      pageTitle={statusCode ? `An error occurred on the server` : 'An error occurred on the client'}
      errorCode={statusCode ? statusCode.toString() : '500'}
    />
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
