import { NewsArticleProps } from 'northants-design-system/build/library/structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.types';
import { HomepageNodeFull_featuredNews } from '../../../cmsPages/Homepage/__generated__/HomepageNodeFull';

export default function transform(news: HomepageNodeFull_featuredNews): NewsArticleProps {
  return {
    id: news.id,
    url: news.url,
    title: news.title,
    date: Date.parse(news.date) / 1000,
    image720x405: news.image720x405 ? news.image720x405 : '',
    image72x41: news.image72x41 ? news.image72x41 : '',
    imageAltText: news.imageAltText ? news.imageAltText : '',
  };
}
