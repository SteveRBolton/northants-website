import { Heading, MaxWidthContainer, PageMain, ServicesLinksList } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { PageLinkProp } from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type HeadingProps = {
  level: 1;
  text: string;
};

type HomepageProps = {
  title: string;
  heading: HeadingProps;
  body: TextWithSlicesProps;
  serviceLinks: PageLinkProp[];
};

export default function Homepage({ title, heading, body, serviceLinks }: HomepageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <PageMain>
          <Heading {...heading} />
          <TextWithSlices {...body} />
          <ServicesLinksList serviceLinksArray={serviceLinks} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
