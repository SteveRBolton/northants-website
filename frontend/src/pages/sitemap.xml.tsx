import React from 'react';

const Sitemap = () => {
  return <div>Sitemap</div>;
};

export const getServerSideProps: ({ res }: { res: any }) => Promise<void> = async ({ res }) => {
  const sitemapUrl = process.env.NEXT_PUBLIC_SITEMAP_ENDPOINT ? process.env.NEXT_PUBLIC_SITEMAP_ENDPOINT : '';

  if (sitemapUrl) {
    const request = await fetch(sitemapUrl);
    const sitemap = await request.text();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  }
};

export default Sitemap;
