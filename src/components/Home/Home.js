import React, { Component } from "react";
import HeroHeader from "./HeroHeader";
import Skills from "./Skills";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    const { avatar } = this.props;
    return (
      <div>
        <HeroHeader avatar={avatar} />
        <Skills />
        <Footer />
      </div>
    );
  }
}
