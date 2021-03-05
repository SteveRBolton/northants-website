import {
  MaxWidthContainer,
  PageMain,
  NewsArticleList,
  Heading,
  Breadcrumbs,
  PageTitle,
  PhaseBanner,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { GetNewsArticles, GetNewsArticlesVariables } from '../api/graphql/__generated__/GetNewsArticles';
import { initializeApollo } from '../lib/apolloClient';
import { getNewsArticles } from '../api/graphql/queries';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = initializeApollo();
  // const { searchTerm } = query;
  // const { page } = query;
  return client
    .query<GetNewsArticles, GetNewsArticlesVariables>({
      query: getNewsArticles,
      variables: {
        text: '',
        page: 0,
      },
    })
    .then((queryRes) => {
      return {
        props: queryRes,
      };
    });
};

type NewsListingProps = {
  data: GetNewsArticles;
};

export default function News(page: NewsListingProps): ReactElement {
  const { news } = page.data;
  return (
    <>
      <Head>
        <title>Latest news | {news.council_name}</title>
      </Head>
      <MaxWidthContainer>
        <PhaseBanner />
        <Breadcrumbs breadcrumbsArray={[{ title: 'Home', url: '/' }]} />
        <PageMain>
          <PageTitle>
            <Heading text="News" level={1} />
          </PageTitle>
          <NewsArticleList
            totalResults={news.total}
            results={
              news.result_list
                ? news.result_list.map((result) => ({
                    id: result.id,
                    title: result.title,
                    url: result.link,
                    excerpt: result.excerpt,
                    date: result.date,
                    thumbnail: result.thumbnail ? result.thumbnail : '',
                  }))
                : []
            }
          />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
