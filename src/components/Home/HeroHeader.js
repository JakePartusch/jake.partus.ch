/** @jsx jsx */
import { jsx } from "@emotion/core";
// eslint-disable-next-line
import React, { Component } from "react";
import styled from "@emotion/styled";

const HeroSegment = styled.header({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  border: "none",
  textAlign: "center",
  background: "linear-gradient(#102A43, #0F609B)",
  backgroundSize: "cover",
  height: "120vh"
});

const HeroContainer = styled.div({
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  height: "100vh",
  color: "#F0F4F8",
  display: "flex"
});

const NameHeader = styled.h1({
  fontSize: "4em",
  fontWeight: 300
});

const HeroSubHeading = styled.div({
  fontSize: "1.3em",
  fontWeight: 300
});

export default class HeroHeader extends Component {
  render() {
    return (
      <HeroSegment>
        <HeroContainer>
          <div>
            <img
              className="mx-auto mb-8 h-40 rounded-full shadow-outline"
              alt="Jake Partusch"
              src={this.props.avatar}
            />
            <NameHeader>Jake Partusch</NameHeader>
          </div>
          <HeroSubHeading>
            Dad.{" "}
            <span role="img" aria-label="family">
              👪
            </span>
          </HeroSubHeading>
          <HeroSubHeading>
            JavaScript Developer.{" "}
            <span role="img" aria-label="computer">
              💻
            </span>
          </HeroSubHeading>
          <HeroSubHeading>
            Golden retriever lover.{" "}
            <span role="img" aria-label="dog">
              🐶
            </span>
          </HeroSubHeading>
          <HeroSubHeading>
            Traveler.{" "}
            <span role="img" aria-label="airplane">
              ✈️
            </span>
          </HeroSubHeading>
          <HeroSubHeading>
            Homebrewer.{" "}
            <span role="img" aria-label="beers">
              🍻
            </span>
          </HeroSubHeading>
        </HeroContainer>
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
          <polygon fill="#D9E2EC" points="0,100 100,0 100,100" />
        </svg>
      </HeroSegment>
    );
  }
}
