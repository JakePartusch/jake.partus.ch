const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/templates/Blog.js`);
  const result = await graphql(`
    query BlogQuery {
      allDevArticles {
        edges {
          node {
            article {
              title
              body_markdown
              id
              cover_image
              slug
            }
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
  result.data.allDevArticles.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.article.slug}`,
      component: blogTemplate,
      context: {
        ...node.article
      }
    });
  });
};
