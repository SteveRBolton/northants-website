import { Breadcrumbs, Heading, MaxWidthContainer, PageMain } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { BreadcrumbsProps } from 'northants-design-system/build/library/structure/Breadcrumbs/Breadcrumbs.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type ServiceLandingPageProps = {
  title: string;
  heading: Heading;
  body: TextWithSlicesProps;
  breadcrumbs: BreadcrumbsProps;
};

type Heading = {
  level: 1;
  text: string;
};

export default function ServiceLandingPage({
  title,
  heading,
  body,
  breadcrumbs,
}: ServiceLandingPageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <Breadcrumbs {...breadcrumbs} />
        <PageMain>
          <Heading {...heading} />
          <TextWithSlices {...body} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
