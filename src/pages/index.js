import React from "react";
import Home from "../components/Home";

export default class Index extends React.Component {
  render() {
    const avatar = this.props.data.avatar.edges.map(
      image => image.node.resize.src
    )[0];
    const projects = this.props.data.projects.edges.map(project => ({
      ...project.node.frontmatter
    }));
    return (
      <div>
        <Home avatar={avatar} projects={projects} />
      </div>
    );
  }
}
export const pageQuery = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(
      filter: { id: { regex: "/work/" } }
      sort: { fields: [fileAbsolutePath], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            content
            siteLink
            sourceLink
          }
        }
      }
    }
    avatar: allImageSharp(
      filter: { original: { src: { regex: "/avatar/" } } }
    ) {
      edges {
        node {
          resize(width: 300, height: 300) {
            src
          }
        }
      }
    }
  }
`;
