const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Jake Partusch',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/util/typography`,
      },
    }
  ],
}

