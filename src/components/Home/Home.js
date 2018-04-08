import React, { Component } from 'react'
import HeroHeader from './HeroHeader';
import Skills from './Skills';
import Work from './Work';
import Footer from './Footer';
import glamorous from 'glamorous';

const HomePage = glamorous.div({});

export default class Home extends Component {
  state = {}

  render() {
    return (
      <HomePage>
        <HeroHeader/>
        <Skills/>
        <Work/>
        <Footer/>
      </HomePage>
    )
  }
}