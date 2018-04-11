module.exports = {
  siteMetadata: {
    title: 'Jake Partusch',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/static/*': [
            'Cache-Control: public,max-age=31536000,immutable', // cache forever
          ],
          '/*.html': [
            'Cache-Control: public, max-age=0, must-revalidate', // do not cache HTML files
          ],
          '/*.js': [
            'Cache-Control: public, max-age=0, must-revalidate', // do not cache JS files
          ],
        },
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/util/typography`,
      },
    }
  ],
}

