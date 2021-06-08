import {
  MaxWidthContainer,
  PageMain,
  SearchResultsList,
  Searchbar,
  Heading,
  Pagination,
  PhaseBanner,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { GetSearchResults, GetSearchResultsVariables } from '../api/graphql/__generated__/GetSearchResults';
import { initializeApollo } from '../lib/apolloClient';
import { getSearchResults } from '../api/graphql/queries';
import AlertBannerServiceIE from '../components/AlertBannerService';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = initializeApollo();
  const { searchTerm } = query;
  const { page } = query;
  return client
    .query<GetSearchResults, GetSearchResultsVariables>({
      query: getSearchResults,
      variables: {
        text: searchTerm ? (searchTerm as string) : ' ',
        page: page ? parseInt(page as string, 10) - 1 : 0,
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
        <title>
          Search results for &quot;{search.text}&quot; | {search.council_name}
        </title>
      </Head>
      <MaxWidthContainer>
        <PhaseBanner />
        <PageMain>
          <AlertBannerServiceIE />
          <Heading text="Search results" level={1} />
          <Searchbar
            isLarge
            isLight
            submitInfo={[{ postTo: '/search', params: { type: 'search' } }]}
            searchTerm={search.text}
          />
          <SearchResultsList
            totalResults={search.total}
            pageNumber={search.page}
            searchTerm={search.text}
            results={
              search.result_list
                ? search.result_list.map((result) => ({
                    title: result.title,
                    link: result.url,
                    summary: result.teaser,
                    url: result.url,
                    service: result.parent ? result.parent : '',
                    TopLineText: result.topLineText ? result.topLineText : undefined,
                    signpostLinksArray: result.signposts?.length
                      ? result.signposts.map((signpost) => ({
                          sovereignCode: parseInt(signpost.code, 10),
                          areaName: signpost.name,
                          url: signpost.homepage,
                        }))
                      : undefined,
                  }))
                : []
            }
          />
          {search.total < 1 && search.didYouMean ? (
            <p>
              Did you mean <a href={`/search?type=search&searchTerm=${search.didYouMean}`}>{search.didYouMean}</a>?
            </p>
          ) : (
            ''
          )}
          <Pagination currentPage={search.page + 1} totalResults={search.total} />
        </PageMain>
      </MaxWidthContainer>
    </>
  );
}