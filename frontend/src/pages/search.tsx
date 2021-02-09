import {
  MaxWidthContainer,
  PageMain,
  SearchResultsList,
  Searchbar,
  Heading,
  Pagination,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { GetSearchResults, GetSearchResultsVariables } from '../api/graphql/__generated__/GetSearchResults';
import { initializeApollo } from '../lib/apolloClient';
import { getSearchResults } from '../api/graphql/queries';

export const getServerSideProps: GetServerSideProps = async () => {
  const client = initializeApollo();
  return client
    .query<GetSearchResults, GetSearchResultsVariables>({
      query: getSearchResults,
      variables: {
        text: 'test',
        page: 0,
      },
    })
    .then((queryRes) => {
      return {
        props: queryRes,
      };
    });
};

type SearchPageProps = {
  data: GetSearchResults;
};

export default function Search(page: SearchPageProps): ReactElement {
  const { search } = page.data;
  return (
    <>
      <Head>
        <title> Search | Northants </title>
      </Head>
      <MaxWidthContainer>
        <PageMain>
          <Heading text="Search Results" level={1} />
          <Searchbar isLarge isLight submitInfo={[{ postTo: '/search', params: { type: 'search' } }]} />
          <SearchResultsList
            searchTerm=""
            results={search.result_list.map((result) => ({
              title: result.title,
              link: result.url,
              summary: result.teaser,
              url: result.url,
              signpostLinksArray: result.signposts.map((signpost) => ({
                sovereignCode: parseInt(signpost.code, 10),
                areaName: signpost.name,
                url: signpost.homepage,
              })),
            }))}
          />
          <Pagination currentPage={search.page} totalResults={search.total} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}
