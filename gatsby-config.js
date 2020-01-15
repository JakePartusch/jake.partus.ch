module.exports = {
  siteMetadata: {
    title: `Jake Partusch's Website`,
    description: `A place to showcase stuff made by me`,
    author: `@JakePartusch`,
    siteUrl: "https://jake.partus.ch"
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: "gatsby-source-dev",
      options: {
        username: "jakepartusch"
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jake Partusch`,
        short_name: `Jake`,
        start_url: `/`,
        background_color: `#999`,
        theme_color: `#999`,
        display: `minimal-ui`,
        icon: `src/images/avatar.jpg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`
  ]
};
