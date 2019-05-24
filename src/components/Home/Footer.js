import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import styled from "@emotion/styled";

const FooterContainer = styled.div({
  backgroundColor: "#1B1C1D"
});

const SocialIcons = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "0.5em"
});

const SocialLink = styled.a({
  margin: "0 0.25rem"
});

const CopyrightText = styled.p({
  color: "rgb(255,255,255,.9)",
  margin: 0,
  marginRight: "1rem"
});

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <SocialIcons>
          <CopyrightText>© Jake Partusch. All rights reserved.</CopyrightText>
          <SocialLink
            noopener
            noreferrer
            href="https://twitter.com/JakePartusch"
          >
            <FontAwesomeIcon
              size="lg"
              icon={faTwitter}
              color="rgb(255,255,255,.9)"
            />
          </SocialLink>
          <SocialLink
            noopener
            noreferrer
            href="https://github.com/JakePartusch"
          >
            <FontAwesomeIcon
              size="lg"
              icon={faGithub}
              color="rgb(255,255,255,.9)"
            />
          </SocialLink>
          <SocialLink
            noopener
            noreferrer
            href="https://www.linkedin.com/in/jacob-partusch-4a181b79/"
          >
            <FontAwesomeIcon
              size="lg"
              icon={faLinkedin}
              color="rgb(255,255,255,.9)"
            />
          </SocialLink>
        </SocialIcons>
      </FooterContainer>
    );
  }
}
