const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/templates/Blog.js`);
  const result = await graphql(`
    query BlogQuery {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}) {
        edges {
          node {
            frontmatter {
              publishDate
              slug
              title
              reactions
            }
            html
            timeToRead
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: blogTemplate,
      context: {
        ...node
      }
    });
  });
};
