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
import { ButtonProps } from 'northants-design-system/build/library/Components/Button/Button.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type ArticlePageProps = {
  body: TextWithSlicesProps;
  title: string;
  parent: ButtonProps | null;
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  date: string;
};

export default function ArticlePage({
  body,
  title,
  date,
  parent,
  metaTitle,
  metaDescription,
  metaKeywords,
}: ArticlePageProps): ReactElement {
  const currentDate = new Date();
  const dummydata = {
    image1440: 'http://placehold.it/1440x810',
    image144: 'http://placehold.it/144x81',
  };
  const dateObject = new Date(date);
  const oldPost = Math.ceil(Math.abs(currentDate.getTime() - dateObject.getTime()) / (1000 * 60 * 60 * 24)) < 365;
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
          <Heading level={1} text={title} />

          {parent ? <Button primary={false} text={parent.text} url={parent.url} /> : null}
          <NewsArticleDate text={date} />
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
