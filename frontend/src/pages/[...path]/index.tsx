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
import transformFeaturedNews from '../../components/News/FeaturedNews/transform';
import { transformInThisSection, transformAlsoFoundIn } from '../../components/SectionSidebar/transform';
import ArticlePage from '../../cmsPages/ArticlePage';
import ErrorPage from '../../cmsPages/ErrorPage';

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
      if (isGraphQLType(queryRes.data.route, 'DrupalRedirectRoute')) {
        const { status, destination } = queryRes.data.route;
        res.writeHead(status, { location: destination });
        res.end();
      }
      if (isGraphQLType(queryRes.data.route, 'DrupalNotFoundRoute')) {
        res.statusCode = 404;
      }
			if (isGraphQLType(queryRes.data.route, 'DrupalAccessDeniedRoute')) {
				res.statusCode = 401;
			}
			if (isGraphQLType(queryRes.data.route, 'DrupalOfflineRoute')) {
				res.statusCode = 503;
			}
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
  // We found a node to render.
  if (isGraphQLType(route, 'DrupalNodeRoute')) {
    const { node } = route;
    if (isGraphQLType(node, 'HomepageNode')) {
      const {
        metaTitle,
        metaDescription,
        metaKeywords,
        homepageBody,
        serviceLinks,
        promotedLinks,
        heroImages,
        promoBanner,
        featuredNews,
      } = node;
      return (
        <Homepage
          metaTitle={metaTitle}
          metaDescription={metaDescription || undefined}
          metaKeywords={metaKeywords || undefined}
          body={homepageBody ? { html: homepageBody.value, embeds: homepageBody.embeds } : undefined}
          serviceLinks={serviceLinks.map(transformServiceLinks)}
          promotedLinks={promotedLinks}
          heroImages={heroImages}
          promoBanner={
            promoBanner
              ? {
                  title: promoBanner.title,
                  ctaText: promoBanner.link.title,
                  ctaUrl: promoBanner.link.url,
                  image1440x810: promoBanner.image1440x810.url,
                  image144x81: promoBanner.image144x81.url,
                  children: '',
                }
              : undefined
          }
          promoBody={promoBanner ? { html: promoBanner.body.value, embeds: [] } : undefined}
          featuredNews={{ articles: featuredNews.map(transformFeaturedNews), viewAllLink: '/news' }}
        />
      );
    }
    if (isGraphQLType(node, 'ServicePageNode')) {
      const {
        metaTitle,
        metaDescription,
        metaKeywords,
        title,
        serviceBody,
        signposting,
        breadcrumbs,
        canonicalSection,
        inSections,
        topLineText,
        warningTextDisclaimer,
      } = node;
      const otherSections = inSections.filter((section) => section.id !== canonicalSection?.id);
      return (
        <ServicePage
          metaTitle={metaTitle}
          metaDescription={metaDescription || undefined}
          metaKeywords={metaKeywords || undefined}
          breadcrumbs={{ breadcrumbsArray: breadcrumbs }}
          title={title}
          body={{ html: serviceBody.value, embeds: serviceBody.embeds }}
          signposting={signposting ? transformSignposting(signposting) : undefined}
          inThisSection={
            canonicalSection && canonicalSection.pages.length > 1
              ? transformInThisSection(canonicalSection, node.id)
              : undefined
          }
          alsoIn={otherSections.length > 0 ? transformAlsoFoundIn(otherSections) : undefined}
          topLineText={topLineText || undefined}
          warningTextDisclaimer={warningTextDisclaimer}
        />
      );
    }
    if (isGraphQLType(node, 'ServiceLandingPageNode')) {
      const { metaTitle, metaDescription, metaKeywords, title, serviceLandingBody, breadcrumbs, hasSections } = node;

      return (
        <ServiceLandingPage
          metaTitle={metaTitle}
          metaDescription={metaDescription || undefined}
          metaKeywords={metaKeywords || undefined}
          title={title}
          body={serviceLandingBody ? { html: serviceLandingBody.value, embeds: serviceLandingBody.embeds } : undefined}
          heading={{ level: 1, text: title }}
          breadcrumbs={{ breadcrumbsArray: breadcrumbs }}
          sections={hasSections.map((section) => transformSection(section, hasSections.length > 1))}
        />
      );
    }
    if (isGraphQLType(node, 'ArticlePageNode')) {
      const {
        body,
        metaTitle,
        metaDescription,
        metaKeywords,
        title,
        parentTitle,
        parentUrl,
        date,
        featuredImage1440x810,
        featuredImage144x81,
        featuredImageCaption,
      } = node;
      const parent = parentTitle || parentUrl ? { text: parentTitle || '', url: parentUrl || '' } : null;
      return (
        <ArticlePage
          body={{ html: body.value, embeds: body.embeds }}
          parent={parent}
          metaTitle={metaTitle}
          title={title}
          date={date}
          metaDescription={metaDescription || undefined}
          metaKeywords={metaKeywords || undefined}
          featuredImage1440x810={
            featuredImage1440x810
              ? {
                  url: featuredImage1440x810.url,
                  altText: featuredImage1440x810.altText ? featuredImage1440x810.altText : undefined,
                }
              : undefined
          }
          featuredImage144x81={
            featuredImage144x81
              ? {
                  url: featuredImage144x81.url,
                  altText: featuredImage144x81.altText ? featuredImage144x81.altText : undefined,
                }
              : undefined
          }
          featuredImageCaption={featuredImageCaption || undefined}
        />
      );
    }
  }

  // Nothing found. 404
  if (isGraphQLType(route, 'DrupalNotFoundRoute')) {
    return <ErrorPage pageTitle="Page not found" errorCode="404" />;
  }

  // Access denied.
  if (isGraphQLType(route, 'DrupalAccessDeniedRoute')) {
    return <ErrorPage pageTitle="This page is unauthorized" errorCode="401" />;
  }

  // Site is offline
  if (isGraphQLType(route, 'DrupalOfflineRoute')) {
    return <ErrorPage pageTitle="This site is offline at the moment" errorCode="503" />;
  }

  throw new Error('Invalid GraphQL response from CMS');
};

export default DrupalPage;
