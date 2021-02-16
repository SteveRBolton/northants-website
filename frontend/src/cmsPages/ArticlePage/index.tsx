import React, { ReactElement } from 'react';
import Head from 'next/head';
import {
  NewsArticleOldBanner,
  NewsArticleDate,
  MaxWidthContainer,
  NewsArticleImage,
  Heading,
  Button,
  PageMain,
} from 'northants-design-system';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type ArticlePageProps = {
  body: TextWithSlicesProps;
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
};

export default function ArticlePage({
  body,
  metaTitle,
  metaDescription,
  metaKeywords,
}: ArticlePageProps): ReactElement {
  const date = new Date();

  const dummydata = {
    date: '02/10/2021',
    buttonText: 'Testing',
    url: 'https://www.google.com/',
    image1440: 'http://placehold.it/1440x810',
    image144: 'http://placehold.it/144x81',
  };
  const dummydate = new Date(dummydata.date);
  const oldPost = Math.ceil(Math.abs(date.getTime() - dummydate.getTime()) / (1000 * 60 * 60 * 24)) < 365;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        {metaDescription ? <meta name="description" content={metaDescription} /> : ''}
        {metaKeywords ? <meta name="keywords" content={metaKeywords} /> : ''}
      </Head>
      <MaxWidthContainer>
        <PageMain>
          {oldPost ? null : <NewsArticleOldBanner />}
          <Heading level={1} text={metaTitle} />
          <Button primary={false} text={dummydata.buttonText} url={dummydata.url} />
          <NewsArticleDate text={dummydata.date} />
          {/* If article has featured image: */}
          {dummydata.image144 || dummydata.image1440 ? null : (
            <NewsArticleImage image1440x810={dummydata.image1440} image144x81={dummydata.image144} />
          )}
          <TextWithSlices {...body} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
