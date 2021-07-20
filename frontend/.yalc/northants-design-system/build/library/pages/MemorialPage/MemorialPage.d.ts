import React from 'react';
export interface MemorialPageProps {
    heroArray: Array<HeroImageProp>;
    servicesArray: Array<PageLinkProp>;
}
interface HeroImageProp {
    /**
     * The url of the image
     */
    image1440x810: string;
    /**
     * The url of the image in 10x smaller for lazy loading
     */
    image144x81: string;
    /**
     * Optional alt text for the image - this should only be included if the image contains content that is important to users and not purely decorative
     */
    imageAltText?: string;
}
export declare const MemorialPage: React.FC<MemorialPageProps>;
interface PageLinkProp {
    /**
    * Title of the page
    */
    title: string;
    /**
    * URL of the page
    */
    url: string;
    /**
    * URL of the svg icon for the service landing page
    */
    iconKey?: string;
    /**
    * Array of quick links for the service
    */
    quickLinksArray: Array<QuickLinkProp>;
}
interface QuickLinkProp {
    /**
    * Title of the page
    */
    title: string;
    /**
    * URL of the page
    */
    url: string;
}
export {};
