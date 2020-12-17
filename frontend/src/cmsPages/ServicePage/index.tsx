import { MaxWidthContainer, PageMain, SignpostLinks } from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { SignpostLinksProps } from 'northants-design-system/build/library/structure/SignpostLinks/SignpostLinks.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type ServicePageProps = {
  title: string;
  body: TextWithSlicesProps;
  signposting?: SignpostLinksProps;
};
export default function ServicePage({ title, body, signposting }: ServicePageProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MaxWidthContainer>
        <PageMain>
          <TextWithSlices {...body} />
          {signposting && <SignpostLinks {...signposting} />}
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
