import { Heading, MaxWidthContainer, PageMain } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type HeadingProps = {
  level: 1;
  text: string;
};

type HomepageProps = {
  title: string;
  heading: HeadingProps;
  body: TextWithSlicesProps;
};

export default function Homepage({ title, heading, body }: HomepageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <PageMain>
          <Heading {...heading} />
          <TextWithSlices {...body} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
