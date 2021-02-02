import { PageLinkProp } from 'northants-design-system/build/library/structure/ServicesLinksList/ServicesLinksList.types';
import { ServiceLinks } from './__generated__/ServiceLinks';

export default (serviceLinks: ServiceLinks): PageLinkProp => {
  return {
    title: serviceLinks.serviceLandingPage.title,
    url: serviceLinks.serviceLandingPage.url,
    quickLinksArray: serviceLinks.servicePages.map((quickLink) => ({
      title: quickLink.title,
      url: quickLink.url,
    })),
  };
};
