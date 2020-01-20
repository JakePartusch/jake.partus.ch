import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import Img from "gatsby-image";

const HeroHeader = ({ avatar }) => {
  return (
    <header
      className="flex flex-col relative"
      style={{
        background: "linear-gradient(#102A43, #0F609B)",
        height: "120vh"
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen text-gray-100 bg-cover">
        <div>
          <Img
            className="mx-auto mb-8 h-40 w-40 rounded-full shadow-outline"
            alt="Jake Partusch"
            fluid={avatar}
          />
          <h1 className="text-6xl font-light mb-4 text-center">
            Jake Partusch
          </h1>
        </div>
        <div>
          <a
            className="inline-block bg-gray-200 rounded-full p-2 m-4"
            href="https://github.com/JakePartusch"
            rel="noopener noreferrer"
            aria-label="Jake's GitHub"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faGithub}
              className="text-blue-900"
            />
          </a>
          <a
            className="inline-block bg-gray-200 rounded-full p-2 m-4"
            href="https://twitter.com/JakePartusch"
            rel="noopener noreferrer"
            aria-label="Jake's Twitter"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faTwitter}
              className="text-blue-900"
            />
          </a>
          <Link
            className="inline-block bg-gray-200 rounded-full p-2 m-4"
            to="/blog"
            aria-label="Jake's Blog"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faPenSquare}
              className="text-blue-900"
            />
          </Link>
        </div>
      </div>
      <svg
        style={{
          height: "20vh"
        }}
        className="absolute bottom-0 w-full text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0,100 100,0 100,100" />
      </svg>
    </header>
  );
};

export default HeroHeader;
