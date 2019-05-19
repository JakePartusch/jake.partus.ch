import React from "react";
import Home from "../components/Home";

export default class Index extends React.Component {
  render() {
    const avatar = this.props.data.avatar.edges.map(
      image => image.node.resize.src
    )[0];
    return (
      <div>
        <Home avatar={avatar} />
      </div>
    );
  }
}
export const pageQuery = graphql`
  query IndexQuery {
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
