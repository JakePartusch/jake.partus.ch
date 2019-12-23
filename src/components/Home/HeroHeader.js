/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { Component } from "react";
import styled from "@emotion/styled";
//https://trianglify.io/p/w:1440!h:900!x:RdGy!v:0.842!c:0.171!s:3yy7z9
import background from "./trianglify_red.svg";

const HeroSegment = styled.header({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  border: "none",
  textAlign: "center",
  backgroundImage: `url('${background}')`,
  backgroundSize: "cover",
  height: "120vh"
});

const HeroContainer = styled.div({
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  height: "100vh",
  color: "rgba(0, 0, 0, .9)",
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

const Avatar = styled.img({
  width: "150px",
  height: "auto",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "500em",
  overflow: "hidden",
  border: "#666 2px solid",
  boxShadow: "0px 0px 3px 0px #666"
});

export default class HeroHeader extends Component {
  render() {
    return (
      <HeroSegment>
        <HeroContainer>
          <div>
            <Avatar alt="Jake Partusch" src={this.props.avatar} />
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
          <polygon fill="#eee" points="0,100 100,0 100,100" />
        </svg>
      </HeroSegment>
    );
  }
}
