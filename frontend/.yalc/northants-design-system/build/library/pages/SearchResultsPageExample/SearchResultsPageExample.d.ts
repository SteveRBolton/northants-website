import React from 'react';
import { SignpostLinkProp } from '../../components/SignpostLinksList/SignpostLinksList.types';
export interface SearchResultsPageExampleProps {
    results: Array<SearchResultProps>;
}
interface SearchResultProps {
    /**
     * Search result title
     */
    title: string;
    /**
     * Link to page
     */
    link: string;
    /**
     * Summary of page
     */
    summary: string;
    /**
     * If it contains signposting links include them here
     */
    signpostLinksArray?: Array<SignpostLinkProp>;
    /**
     * If there is a service area tied to the result
     */
    service: string;
}
export declare const SearchResultsPageExample: React.FC<SearchResultsPageExampleProps>;
export {};
