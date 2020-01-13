/** @jsx jsx */
import { jsx } from "@emotion/core";
// eslint-disable-next-line
import React from "react";

const Bio = () => {
  return (
    <section css={{ minHeight: "120vh" }} className="bg-gray-200 relative">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl md:text-5xl font-normal mb-12 text-gray-800">
          About Me
        </h1>
        <blockquote className="border-none md:border-solid border-l-4 border-red-900 text-gray-900 mb-12 px-4 md:px-8 text-xl md:text-3xl font-light max-w-3xl">
          I am a software architect, speaker, and engineer who loves all things
          JavaScript. I’m constantly on the search for new skills and techniques
          to build performant, accessible and user-friendly web applications.
          Currently, I am the Director of Web and Mobile at Object Partners
          where I lead front-end product development for multiple clients. When
          I’m not writing code, I love to read, golf, and spend time with my
          family.
        </blockquote>
      </div>
      <svg
        css={{
          height: "20vh"
        }}
        className="absolute w-full text-gray-100 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0,0 0,100 100,100" />
      </svg>
    </section>
  );
};

export default Bio;
