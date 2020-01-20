import { graphql, Link } from "gatsby";
import React from "react";
import SEO from "../components/SEO";
import Footer from "../components/common/Footer";
import "./index.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";
import { withPlugin } from "tinacms";
import { RemarkCreatorPlugin } from "gatsby-tinacms-remark";

const BlogIndex = props => {
  const posts = props.data.allMarkdownRemark.edges.map(post => ({
    ...post.node,
    ...post.node.frontmatter
  }));
  const avatar = props.data.file.childImageSharp.fluid;
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main>
        <SEO title="Blog" />
        <header className="pt-8">
          <Link
            to="/"
            className="max-w-4xl mx-auto px-4 md:px-8 flex items-center hover:underline"
          >
            <Img
              className="h-12 w-12 rounded-full shadow-outline mr-4"
              alt="Jake Partusch"
              fluid={avatar}
            />
            <h1 className="text-2xl font-bold text-gray-900">Jake's Blog</h1>
          </Link>
        </header>
        <div className="max-w-4xl m-auto my-8">
          <div className="px-4 md:px-8 font-bold text-2xl text-gray-900 mb-6 underline">
            Latest Posts
          </div>
          {posts.map(post => (
            <article className="flex flex-col justify-between mb-6 px-4 md:px-8">
              <header>
                <h2 className="font-bold text-2xl text-blue-700 hover:text-blue-800 hover:underline cursor-pointer">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>
              </header>
              <p className="text-gray-900 text-xl">{post.publishDate}</p>
              <div className="flex">
                <p className="text-gray-900 mr-4 text-xl">
                  {post.timeToRead} min read
                </p>
                <div className="text-red-900 text-xl">
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
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const dateString = new Date().toISOString().split("T")[0];

const CreatePostPlugin = new RemarkCreatorPlugin({
  label: "Create Post",
  fields: [
    { name: "title", label: "Title", component: "text", required: true }
  ],
  filename: form => {
    let slug = form.title.replace(/\s+/, "-").toLowerCase();
    return `src/content/blog/${dateString}-${slug}.md`;
  },
  frontmatter: form => ({
    type: "blog",
    title: form.title,
    publishDate: dateString,
    slug: form.title.replace(/\s+/, "-").toLowerCase()
  })
});

export default withPlugin(BlogIndex, CreatePostPlugin);
