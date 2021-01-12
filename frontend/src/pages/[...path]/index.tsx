import { GetServerSideProps } from 'next';
import React, { ReactElement } from 'react';
import { isGraphQLType } from '../../types/utils';
import { getCMSContentOrRedirect } from '../../api/graphql/queries';
import Homepage from '../../cmsPages/Homepage';
import ServicePage from '../../cmsPages/ServicePage';
import ServiceLandingPage from '../../cmsPages/ServiceLandingPage';
import {
  GetCMSContentOrRedirect,
  GetCMSContentOrRedirectVariables,
} from '../../api/graphql/__generated__/GetCMSContentOrRedirect';
import { initializeApollo } from '../../lib/apolloClient';
import transformSignposting from '../../components/Signposting/transform';
import transformSection from '../../components/Section/transform';
import transformServiceLinks from '../../components/ServiceLinks/transform';
import { transformInThisSection, transformAlsoFoundIn } from '../../components/SectionSidebar/transform';

export const getServerSideProps: GetServerSideProps = async ({ resolvedUrl }) => {
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
    const { node } = route;
    if (isGraphQLType(node, 'HomepageNode')) {
      const { title, homepageBody, serviceLinks } = node;
      return (
        <Homepage
          title={title}
          body={homepageBody ? { html: homepageBody.value, embeds: homepageBody.embeds } : undefined}
          serviceLinks={serviceLinks.map(transformServiceLinks)}
        />
      );
    }
    if (isGraphQLType(node, 'ServicePageNode')) {
      const { title, serviceBody, signposting, breadcrumbs, canonicalSection, sections } = node;
      const otherSections = sections.filter((section) => section.id !== canonicalSection?.id);

      return (
        <ServicePage
          breadcrumbs={{ breadcrumbsArray: breadcrumbs }}
          title={title}
          body={{ html: serviceBody.value, embeds: serviceBody.embeds }}
          signposting={signposting ? transformSignposting(signposting) : undefined}
          inThisSection={canonicalSection ? transformInThisSection(canonicalSection, node.id) : undefined}
          alsoIn={otherSections.length > 0 ? transformAlsoFoundIn(otherSections) : undefined}
        />
      );
    }
    if (isGraphQLType(node, 'ServiceLandingPageNode')) {
      const { title, serviceLandingBody, breadcrumbs, sections } = node;

      return (
        <ServiceLandingPage
          title={title}
          body={serviceLandingBody ? { html: serviceLandingBody.value, embeds: serviceLandingBody.embeds } : undefined}
          heading={{ level: 1, text: title }}
          breadcrumbs={{ breadcrumbsArray: breadcrumbs }}
          sections={sections.map((section) => transformSection(section, sections.length > 1))}
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
