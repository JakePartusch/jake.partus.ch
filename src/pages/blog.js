import { graphql } from "gatsby";
import React from "react";
import SEO from "../components/SEO";
import "./index.css";

const Blogs = props => {
  console.log(props);
  const posts = props.data.allDevArticles.edges.map(post => ({
    ...post.node.article
  }));
  return (
    <>
      <SEO title="Blog" />
      {posts.map(post => (
        <h2>
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </h2>
      ))}
    </>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    allDevArticles {
      edges {
        node {
          article {
            title
            body_html
            id
            cover_image
            slug
          }
        }
      }
    }
  }
`;

export default Blogs;
