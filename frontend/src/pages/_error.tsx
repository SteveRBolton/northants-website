import { NextPageContext } from 'next';
import React from 'react';

type ErrorProps = {
  statusCode: number | undefined;
};

function Error({ statusCode }: ErrorProps) {
  return (
    <p>
      TODO: Implement custom Error page:{' '}
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
