import React from "react";
import "./tweet.css";

const Blog = props => {
  const blogHtml = { __html: props.pageContext.html };
  return <div dangerouslySetInnerHTML={blogHtml}></div>;
};

export default Blog;
