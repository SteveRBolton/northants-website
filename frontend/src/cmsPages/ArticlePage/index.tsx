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
import { ButtonProps } from 'northants-design-system/build/library/components/Button/Button.types';
import TextWithSlices, { TextWithSlicesProps } from '../../components/TextWithSlices';

type FeaturedImageProps = {
  url: string;
  altText?: string;
};

type ArticlePageProps = {
  body: TextWithSlicesProps;
  title: string;
  parent: ButtonProps | null;
  metaTitle: string;
  metaDescription?: string;
  metaKeywords?: string;
  date: string;
  featuredImage1440x810?: FeaturedImageProps;
  featuredImage144x81?: FeaturedImageProps;
  featuredImageCaption?: string;
};

export default function ArticlePage({
  body,
  title,
  date,
  parent,
  metaTitle,
  metaDescription,
  metaKeywords,
  featuredImage1440x810,
  featuredImage144x81,
  featuredImageCaption,
}: ArticlePageProps): ReactElement {
  const currentDate = new Date();
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
          {featuredImage1440x810 && featuredImage144x81 ? (
            <NewsArticleImage
              image1440x810={featuredImage1440x810?.url}
              image144x81={featuredImage144x81?.url}
              imageAltText={featuredImage1440x810?.altText}
              imageCaption={featuredImageCaption}
            />
          ) : null}
          <TextWithSlices {...body} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
