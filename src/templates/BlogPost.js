import React from "react";
import Footer from "../components/common/Footer";
import "./blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const BlogPost = props => {
  const blogHtml = { __html: props.pageContext.html };
  const post = props.pageContext;
  return (
    <div className="pt-16 min-w-full bg-gray-100 text-gray-900 md:text-lg">
      <main className="mb-12">
        <header className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-5xl font-bold mb-4">{post.frontmatter.title}</h1>
          <p className="text-gray-900">{post.frontmatter.publishDate}</p>
          <p className="text-gray-900 mr-4">{post.timeToRead} min read</p>
          <div className="text-red-900">
            <span className="mr-2">{post.frontmatter.reactions}</span>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </header>
        <article className="blog-post max-w-4xl m-auto p-2" dangerouslySetInnerHTML={blogHtml}></article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;