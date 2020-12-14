import { MaxWidthContainer } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type ServicePageProps = {
  title: string;
  body: TextWithSlicesProps;
};
export default function ServicePage({ title, body }: ServicePageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <TextWithSlices {...body} />
      </MaxWidthContainer>
    </>
  );
}
