import React, { Component } from "react";
import HeroHeader from "./HeroHeader";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";
import styled from "@emotion/styled";

const HomePage = styled.div({});

export default class Home extends Component {
  render() {
    const { avatar } = this.props;
    return (
      <HomePage>
        <HeroHeader avatar={avatar} />
        <Skills />
        {/* <Work
          projects={this.props.projects}
        /> */}
        <Footer />
      </HomePage>
    );
  }
}
