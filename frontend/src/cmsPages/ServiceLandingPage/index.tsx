import { Heading, MaxWidthContainer } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type ServiceLandingPageProps = {
  title: string;
  heading: Heading;
  body: TextWithSlicesProps;
};

type Heading = {
  level: 1;
  text: string;
};

export default function ServiceLandingPage({ title, heading, body }: ServiceLandingPageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <Heading {...heading} />
        <TextWithSlices {...body} />
      </MaxWidthContainer>
    </>
  );
}
