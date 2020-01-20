import React from "react";
import Home from "../components/Home";
import SEO from "../components/SEO";
import "./index.css";

const Index = ({ data }) => {
  const avatar = data.file.childImageSharp.fluid;
  return (
    <>
      <SEO title="Home" />
      <Home avatar={avatar} />
    </>
  );
};
export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default Index;
