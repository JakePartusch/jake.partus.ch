import React from "react";
import "./tweet.css";

const Blog = props => {
  console.log(props);
  const blogHtml = { __html: props.pageContext.body_html };
  return <div dangerouslySetInnerHTML={blogHtml}></div>;
};

export default Blog;
