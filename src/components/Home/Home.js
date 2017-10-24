import React, { Component } from 'react'
import HeroHeader from './HeroHeader';
import Skills from './Skills';
import Work from './Work';
import Footer from './Footer';

export default class Home extends Component {
  state = {}

  render() {
    return (
      <div>
        <HeroHeader/>
        <Skills/>
        <Work/>
        <Footer/>
      </div>
    )
  }
}