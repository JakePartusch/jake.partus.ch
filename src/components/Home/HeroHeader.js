import React, { Component } from "react";
import styled from "@emotion/styled";

const HeroSegment = styled.div({
  minHeight: "700px",
  padding: "1em 0em",
  background: "#1B1C1D",
  color: "rgba(255, 255, 255, .9)",
  textAlign: "center",
  margin: "0",
  paddingLeft: "0",
  paddingRight: "0",
  borderBottom: "1px solid rgba(34, 36, 38, .15)"
});

const HeroHeading = styled.div({
  marginBottom: "0",
  marginTop: "8em"
});

const NameHeader = styled.h1({
  fontSize: "4em"
});

const HeroSubHeading = styled.h4({
  fontSize: "1.3em",
  marginBottom: "0.25em"
});

const Container = styled.div({
  maxWidth: "700px",
  lineHeight: "1.5",
  margin: "auto"
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
        <Container>
          <HeroHeading>
            <Avatar src={this.props.avatar} />
            <NameHeader>Jake Partusch</NameHeader>
          </HeroHeading>
          <HeroSubHeading>Dad. 👪</HeroSubHeading>
          <HeroSubHeading>JavaScript Developer. 💻</HeroSubHeading>
          <HeroSubHeading>Golden retriever lover. 🐶</HeroSubHeading>
          <HeroSubHeading>Traveler. ✈️</HeroSubHeading>
          <HeroSubHeading>Homebrewer. 🍻</HeroSubHeading>
        </Container>
      </HeroSegment>
    );
  }
}
