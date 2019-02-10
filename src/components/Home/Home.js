import React from "react";
import styled, { withTheme } from "styled-components";

class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  componentDidMount() {
      document.title = "KitchenMate Challenge";
  }

  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export default withTheme(Home);
