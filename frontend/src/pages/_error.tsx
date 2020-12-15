import { NextPageContext } from 'next';
import React, { ReactElement } from 'react';

type ErrorProps = {
  statusCode: number | undefined;
};

export default function Error({ statusCode }: ErrorProps): ReactElement {
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
