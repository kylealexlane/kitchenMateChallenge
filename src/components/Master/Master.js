import React from "react";
import styled, { keyframes, withTheme } from "styled-components";
import { Link } from "react-router-dom";

import { ParticleBackground } from 'components/ParticleBackground';
import { Home } from 'components/Home';
import { PortfolioSection } from 'components/PortfolioSection';


class Master extends React.Component {
  constructor(props) {
    super(props);
    this.setScreenCallback = this.setScreenCallback.bind(this);
    this.state = {
      currentScreen: 'home',
    };
  }

  componentDidMount() {
    document.title = "Kyle Lane";
  }

  setScreenCallback(newScreen) {
    console.log('setting screen', newScreen);
    this.setState({ currentScreen: newScreen });
  }

  render() {
    return (
      <React.Fragment>
        <ParticleBackground />
        { this.state.currentScreen === 'home' &&
          <Home setScreen={this.setScreenCallback}/>
        }
        { this.state.currentScreen === 'portfolio' &&
          <PortfolioSection setScreen={this.setScreenCallback}/>
        }
      </React.Fragment>
    );
  }
}

export default withTheme(Master);