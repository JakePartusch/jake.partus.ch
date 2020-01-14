import React, { Component } from "react";

export default class HeroHeader extends Component {
  render() {
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
            <img
              className="mx-auto mb-8 h-40 rounded-full shadow-outline"
              alt="Jake Partusch"
              src={this.props.avatar}
            />
            <h1 className="text-6xl font-light mb-4 text-center">Jake Partusch</h1>
          </div>
          <div className="text-2xl font-light">
            Dad.{" "}
            <span role="img" aria-label="family">
              👪
            </span>
          </div>
          <div className="text-2xl font-light">
            JavaScript Developer.{" "}
            <span role="img" aria-label="computer">
              💻
            </span>
          </div>
          <div className="text-2xl font-light">
            Golden retriever lover.{" "}
            <span role="img" aria-label="dog">
              🐶
            </span>
          </div>
          <div className="text-2xl font-light">
            Traveler.{" "}
            <span role="img" aria-label="airplane">
              ✈️
            </span>
          </div>
          <div className="text-2xl font-light">
            Homebrewer.{" "}
            <span role="img" aria-label="beers">
              🍻
            </span>
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
  }
}
