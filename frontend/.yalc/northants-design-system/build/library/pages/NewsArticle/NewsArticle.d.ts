import React from "react";
export interface NewsArticleProps {
    withImage?: string;
    imagePlaceholder?: string;
    isOld?: boolean;
}
export declare const NewsArticle: React.FC<NewsArticleProps>;
