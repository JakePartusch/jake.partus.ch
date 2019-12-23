import React, { Component } from "react";
import HeroHeader from "./HeroHeader";
import Bio from "./Bio";
import Skills from "./Skills";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    const { avatar } = this.props;
    return (
      <>
        <HeroHeader avatar={avatar} />
        <main>
          <Bio />
          <Skills />
        </main>
        <Footer />
      </>
    );
  }
}
