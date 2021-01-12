import { MaxWidthContainer, PageMain, ServicesLinksList } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { PageLinkProp } from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type HomepageProps = {
  title: string;
  body?: TextWithSlicesProps;
  serviceLinks: PageLinkProp[];
};

export default function Homepage({ title, body, serviceLinks }: HomepageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <PageMain>
          {body && <TextWithSlices {...body} />}
          <ServicesLinksList serviceLinksArray={serviceLinks} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
