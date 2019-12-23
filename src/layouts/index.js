import React from "react";
import PropTypes from "prop-types";

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return <>{this.props.children()}</>;
  }
}
