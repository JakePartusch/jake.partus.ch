module.exports = {
  siteMetadata: {
    title: `Jake Partusch`,
    description: `A place to showcase stuff made by Jake`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 756
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-vscode`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jake Partusch`,
        short_name: `Jake`,
        start_url: `/`,
        background_color: `#f0f4f8`,
        theme_color: `#f0f4f8`,
        display: `minimal-ui`,
        icon: `src/images/avatar.jpg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`
  ]
};
