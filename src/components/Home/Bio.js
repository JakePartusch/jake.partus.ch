import React from "react";
import styled from "@emotion/styled";

const Container = styled.div({
  background: "linear-gradient(#999, #222)",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center "
});

const Quote = styled.blockquote({
  maxWidth: "800px",
  fontStyle: "italic",
  borderLeft: "5px solid rgb(178, 24, 43)",
  fontSize: "2rem",
  fontWeight: "300",
  paddingLeft: "2rem",
  color: "rgb(255,255,255,0.9)",
  "@media(max-width:600px)": {
    fontSize: "1.5rem",
    border: "none"
  }
});

const Bio = () => {
  return (
    <Container>
      <Quote>
        <span role="img" aria-label="wave">
          👋
        </span>{" "}
        My name is Jake, and I love all things JavaScript. I'm the Director of
        Web and Mobile at Object Partners, where we help our clients to build
        highly customized web applications. I feel most at home when I'm either
        learning something new, or teaching others. When I'm not writing code, I
        love to read, golf, and spend time with my family{" "}
        <span role="img" aria-label="family">
          👪
        </span>
        .
      </Quote>
    </Container>
  );
};

export default Bio;
