import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import styled from "@emotion/styled";

const FooterContainer = styled.div({
  backgroundColor: "#1B1C1D"
});

const StyledSocialIcon = styled(SocialIcon)({
  margin: "0.25em"
});

const SocialIcons = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5em"
});

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <SocialIcons>
          <StyledSocialIcon url="https://twitter.com/JakePartusch" />
          <StyledSocialIcon url="https://github.com/JakePartusch" />
          <StyledSocialIcon url="https://www.linkedin.com/in/jacob-partusch-4a181b79/" />
        </SocialIcons>
      </FooterContainer>
    );
  }
}
