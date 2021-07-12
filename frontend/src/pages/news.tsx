import {
  MaxWidthContainer,
  PageMain,
  Searchbar,
  Heading,
  Pagination,
  Breadcrumbs,
  PageTitle,
  PageWithSidebarContainer,
  PageSidebar,
  NewsArticleFilterAccordion,
  CheckboxListFilter,
  DropDownFilter,
  NewsArticleList,
  PhaseBanner,
  NewsArticleListHeader,
} from 'northants-design-system';
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { GetNewsArticles, GetNewsArticlesVariables } from '../api/graphql/__generated__/GetNewsArticles';
import { initializeApollo } from '../lib/apolloClient';
import { getNewsArticles } from '../api/graphql/queries';
import AlertBannerServiceIE from '../components/AlertBannerService';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = initializeApollo();
  const { searchTerm } = query;
  const { page } = query;
  const { articleType } = query;
  const { services } = query;
  const { sortBy } = query;
  return client
    .query<GetNewsArticles, GetNewsArticlesVariables>({
      query: getNewsArticles,
      variables: {
        text: searchTerm ? (searchTerm as string) : ' ',
        articleType: articleType ? (articleType as string) : ' ',
        services: services ? (services as string) : '0',
        page: page ? parseInt(page as string, 10) - 1 : 0,
        sortBy: sortBy ? (sortBy as string) : 'desc',
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
        <meta name="description" content={`Latest news from ${news.council_name}`} />
      </Head>
      <MaxWidthContainer>
        <PhaseBanner />
        <Breadcrumbs breadcrumbsArray={[{ title: 'Home', url: '/' }]} />
        <AlertBannerServiceIE />
        <PageTitle>
          <Heading text="News" level={1} />
        </PageTitle>
        <PageWithSidebarContainer sidebarLeft>
          <PageSidebar>
            <NewsArticleFilterAccordion
              sections={[
                {
                  title: 'Search articles',
                  content: (
                    <>
                      <Searchbar
                        isLight
                        id="searchBar"
                        submitInfo={[{ postTo: '/news', params: { type: 'search' } }]}
                        searchTerm={news.text}
                      />
                    </>
                  ),
                  isExpanded: true,
                },
                {
                  title: 'Services',
                  content: (
                    <>
                      <DropDownFilter
                        label="Filter by service"
                        hideLabel={false}
                        selected={news.service}
                        options={news.allServices.map((service) => ({
                          title: service ? service.title : '',
                          value: service ? service.id : '',
                        }))}
                      />
                    </>
                  ),
                  isExpanded: true,
                },
                {
                  title: 'Type of article',
                  content: (
                    <>
                      <CheckboxListFilter
                        options={news.allArticleTypes.map((type) => ({
                          title: type ? type.title : '',
                          value: type ? type.id : '',
                        }))}
                        checked={news.articleType}
                        label="Type of article"
                        hint=""
                        displayLegend={false}
                      />
                    </>
                  ),
                  isExpanded: true,
                },
              ]}
            />
          </PageSidebar>
          <PageMain>
            <NewsArticleListHeader
              totalResults={news.total}
              sortBy={news.sortBy}
              sortByOptions={[
                { title: 'Most recent first', value: 'desc' },
                { title: 'Oldest first', value: 'asc' },
              ]}
            />
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
                      image720x405: result.image720x405 ? result.image720x405 : '',
                      image72x41: result.image72x41 ? result.image72x41 : '',
                      imageAltText: result.imageAltText ? result.imageAltText : '',
                    }))
                  : []
              }
            />
            <Pagination currentPage={news.page + 1} totalResults={news.total} resultsPerPage={5} postTo="/news" />
          </PageMain>
        </PageWithSidebarContainer>
      </MaxWidthContainer>
    </>
  );
}
