import { Breadcrumbs, MaxWidthContainer, PageMain, SignpostLinks } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { SignpostLinksProps } from 'northants-design-system/build/library/structure/SignpostLinks/SignpostLinks.types';
import { BreadcrumbsProps } from 'northants-design-system/build/library/structure/Breadcrumbs/Breadcrumbs.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type ServicePageProps = {
  title: string;
  body: TextWithSlicesProps;
  signposting?: SignpostLinksProps;
  breadcrumbs: BreadcrumbsProps;
};
export default function ServicePage({ title, body, signposting, breadcrumbs }: ServicePageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <Breadcrumbs {...breadcrumbs} />
        <PageMain>
          <TextWithSlices {...body} />
          {signposting && <SignpostLinks {...signposting} />}
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
