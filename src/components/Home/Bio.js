/** @jsx jsx */
import { jsx } from "@emotion/core";
// eslint-disable-next-line
import React from "react";
import styled from "@emotion/styled";

const Container = styled.section({
  background: "#eee",
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
  marginBottom: "3rem"
});

const Quote = styled.blockquote({
  maxWidth: "800px",
  borderLeft: "5px solid rgb(178, 24, 43)",
  fontSize: "2rem",
  fontWeight: "300",
  paddingLeft: "2rem",
  marginBottom: "3rem",
  color: "#111",
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
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          My name is Jake, and I love all things JavaScript. I'm the Director of
          Web and Mobile at Object Partners, where we help our clients to build
          highly customized web applications. I feel most at home when I'm
          either learning something new, or teaching others. When I'm not
          writing code, I love to read, golf, and spend time with my family{" "}
          <span role="img" aria-label="family">
            👪
          </span>
          .
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
        <polygon fill="#fff" points="0,0 0,100 100,100" />
      </svg>
    </Container>
  );
};

export default Bio;
