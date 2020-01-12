import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import styled from "@emotion/styled";

const FooterContainer = styled.footer({
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

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-900">
        <div className="flex flex-col items-center p-12">
          <p className="text-gray-100 mb-4">
            © Jake Partusch. All rights reserved.
          </p>
          <div className="flex justify-between w-32">
            <a
              aria-label="Twitter"
              rel="noopener"
              href="https://twitter.com/JakePartusch"
            >
              <FontAwesomeIcon
                size="lg"
                icon={faTwitter}
                className="text-gray-100"
              />
            </a>
            <a
              aria-label="GitHub"
              rel="noopener"
              href="https://github.com/JakePartusch"
            >
              <FontAwesomeIcon
                size="lg"
                icon={faGithub}
                className="text-gray-100"
              />
            </a>
            <a
              aria-label="LinkedIn"
              rel="noopener"
              href="https://www.linkedin.com/in/jacob-partusch-4a181b79/"
            >
              <FontAwesomeIcon
                size="lg"
                icon={faLinkedin}
                className="text-gray-100"
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
