import { GetServerSideProps, NextPageContext } from 'next';
import React, { ReactElement } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BreadcrumbsProps } from 'northants-design-system/build/library/structure/Breadcrumbs/Breadcrumbs.types';
import { isGraphQLType } from '../../types/utils';
import { getCMSContentOrRedirect } from '../../api/graphql/queries';
import ServicePage from '../../cmsPages/ServicePage';
import ServiceLandingPage from '../../cmsPages/ServiceLandingPage';
import {
  GetCMSContentOrRedirect,
  GetCMSContentOrRedirectVariables,
} from '../../api/graphql/__generated__/GetCMSContentOrRedirect';
import { initializeApollo } from '../../lib/apolloClient';

export const getServerSideProps: GetServerSideProps = async ({ resolvedUrl, res }) => {
  const client = initializeApollo();

  return client
    .query<GetCMSContentOrRedirect, GetCMSContentOrRedirectVariables>({
      query: getCMSContentOrRedirect,
      variables: {
        path: resolvedUrl,
      },
    })
    .then((queryRes) => {
      return {
        props: queryRes,
      };
    });
};

type DrupalPageProps = {
  data: GetCMSContentOrRedirect;
};

const DrupalPage = (page: DrupalPageProps): ReactElement => {
  const { route } = page.data;

  // Redirect found for the provided path
  if (isGraphQLType(route, 'DrupalRedirectRoute')) {
    return <p>TODO: Implement redirects</p>;
  }

  // We found a node to render.
  if (isGraphQLType(route, 'DrupalNodeRoute')) {
    const breadcrumbs: BreadcrumbsProps = {
      breadcrumbsArray: [
        {
          title: 'TODO',
          url: 'http://www.example.com',
        },
        {
          title: 'TODO',
          url: 'http://www.example.com',
        },
        {
          title: 'TODO',
          url: 'http://www.example.com',
        },
      ],
    };
    const { node } = route;
    if (isGraphQLType(node, 'ServicePageNode')) {
      const { title, body } = node;
      return <ServicePage title={title} body={{ html: body.value, embeds: body.embeds }} />;
    }
    if (isGraphQLType(node, 'ServiceLandingPageNode')) {
      const { title, body } = node;
      return (
        <ServiceLandingPage
          title={title}
          body={{ html: body.value, embeds: body.embeds }}
          heading={{ level: 1, text: title }}
        />
      );
    }
  }

  // Nothing found. 404
  if (isGraphQLType(route, 'DrupalNotFoundRoute')) {
    return <p>TODO: Implement 404s</p>;
  }

  // Access denied.
  if (isGraphQLType(route, 'DrupalAccessDeniedRoute')) {
    return <p>TODO: Implement Access denied page</p>;
  }

  // Site is offline
  if (isGraphQLType(route, 'DrupalOfflineRoute')) {
    return <p>TODO: Implement site offline page.</p>;
  }

  throw new Error('Invalid GraphQL response from CMS');
};

export default DrupalPage;
