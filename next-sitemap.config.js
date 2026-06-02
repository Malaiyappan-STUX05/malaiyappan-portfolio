/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://malaiyappan.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/'],
      },
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
};
