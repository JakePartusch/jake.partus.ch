import { graphql } from "gatsby";
import React from "react";
import SEO from "../components/SEO";
import Footer from "../components/common/Footer";
import "./index.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blogs = props => {
  const posts = props.data.allMarkdownRemark.edges.map(post => ({
    ...post.node,
    ...post.node.frontmatter
  }));
  const avatar = props.data.avatar.edges.map(image => image.node.resize.src)[0];
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main>
        <SEO title="Blog" />
        <header className="bg-blue-900 py-4">
          <div className="max-w-4xl m-auto px-2 flex items-center ">
            <img
              className="h-12 rounded-full shadow-outline mr-4"
              alt="Jake Partusch"
              src={avatar}
            />
            <h1 className="text-2xl text-gray-100">Blog</h1>
          </div>
        </header>
        <div className="max-w-4xl m-auto my-8">
          {posts.map(post => (
            <article className="flex flex-col justify-between mb-6 px-4 md:px-8">
              <header>
                <h2 className="font-bold text-xl text-gray-700 hover:text-blue-700 hover:underline cursor-pointer">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>
              </header>
              <p className="text-gray-900">{post.publishDate}</p>
              <div className="flex">
                <p className="text-gray-900 mr-4">{post.timeToRead} min read</p>
                <div className="text-red-900">
                  <span className="mr-2">{post.reactions}</span>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: frontmatter___publishDate, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            publishDate(formatString: "MMMM DD, YYYY")
            slug
            title
            reactions
          }
          html
          timeToRead
        }
      }
    }
    avatar: allImageSharp(
      filter: { original: { src: { regex: "/avatar/" } } }
    ) {
      edges {
        node {
          resize(width: 150, height: 150) {
            src
          }
        }
      }
    }
  }
`;

export default Blogs;
