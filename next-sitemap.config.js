/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.adlifetrust.org.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // ❗ disables index + nested sitemap-0.xml
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['*'], // block default scanning since using App Router

  additionalPaths: async () => [
    { loc: '/', changefreq: 'daily', priority: 1.0 },
    { loc: '/about-us', changefreq: 'monthly', priority: 0.7 },
    { loc: '/activities', changefreq: 'monthly', priority: 0.7 },
    { loc: '/mentees', changefreq: 'monthly', priority: 0.7 },
    { loc: '/volunteer', changefreq: 'monthly', priority: 0.7 },
  ],
};
