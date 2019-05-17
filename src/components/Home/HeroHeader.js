import React, { Component } from "react";
import styled from "@emotion/styled";
//https://trianglify.io/p/w:1440!h:900!x:RdGy!v:0.842!c:0.171!s:3yy7z9
import background from "./trianglify_red.svg";

const HeroSegment = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  height: "100vh",
  color: "rgba(0, 0, 0, .9)",
  textAlign: "center",
  borderBottom: "1px solid rgba(34, 36, 38, .15)",
  backgroundImage: `url('${background}')`,
  backgroundSize: "cover"
});

const NameHeader = styled.h1({
  fontSize: "4em",
  fontWeight: 300
});

const HeroSubHeading = styled.h4({
  fontSize: "1.3em",
  marginBottom: "0.25em",
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
        <div>
          <Avatar src={this.props.avatar} />
          <NameHeader>Jake Partusch</NameHeader>
        </div>
        <HeroSubHeading>Dad. 👪</HeroSubHeading>
        <HeroSubHeading>JavaScript Developer. 💻</HeroSubHeading>
        <HeroSubHeading>Golden retriever lover. 🐶</HeroSubHeading>
        <HeroSubHeading>Traveler. ✈️</HeroSubHeading>
        <HeroSubHeading>Homebrewer. 🍻</HeroSubHeading>
      </HeroSegment>
    );
  }
}
