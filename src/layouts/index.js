import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react';

// Styles
import './index.css';
import 'semantic-ui-css/semantic.css';

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <Container fluid>
        {this.props.children()}
      </Container>
    )
  }
}
