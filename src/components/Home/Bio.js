/** @jsx jsx */
import { jsx } from "@emotion/core";
// eslint-disable-next-line
import React from "react";
import styled from "@emotion/styled";

const Container = styled.section({
  background: "#D9E2EC",
  minHeight: "120vh",
  position: "relative"
});

const QuoteContainer = styled.div({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
});

const Heading = styled.h1({
  textAlign: "center",
  fontSize: "3em",
  marginBottom: "3rem",
  fontWeight: "500",
  color: "#102A43"
});

const Quote = styled.blockquote({
  maxWidth: "800px",
  borderLeft: "5px solid #8D2B0B",
  fontSize: "2rem",
  fontWeight: "300",
  paddingLeft: "2rem",
  marginBottom: "3rem",
  color: "#102A43",
  "@media(max-width:600px)": {
    fontSize: "1.5rem",
    border: "none"
  }
});

const Bio = () => {
  return (
    <Container>
      <QuoteContainer>
        <Heading>About Me</Heading>
        <Quote>
          I am a software architect, speaker, and engineer who loves all things
          JavaScript. I’m constantly on the search for new skills and techniques
          to build performant, accessible and user-friendly web applications.
          Currently, I am the Director of web and mobile at Object Partners
          where I lead front-end product development for multiple clients. When
          I’m not writing code, I love to read, golf, and spend time with my
          family.
        </Quote>
      </QuoteContainer>
      <svg
        css={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "20vh"
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#F0F4F8" points="0,0 0,100 100,100" />
      </svg>
    </Container>
  );
};

export default Bio;
