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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/util/typography`,
      },
    }
  ],
}

