import { NewsArticleProps } from 'northants-design-system/build/library/structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.types';
import { HomepageNodeFull_featuredNews } from '../../../cmsPages/Homepage/__generated__/HomepageNodeFull';

export default function transform(news: HomepageNodeFull_featuredNews): NewsArticleProps {
  return {
    id: news.id,
    url: news.url,
    title: news.title,
    date: Date.parse(news.date) / 1000,
    thumbnail: news.featuredImage1440x810 ? news.featuredImage1440x810?.url : '',
  };
}
