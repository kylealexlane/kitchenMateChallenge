import React from "react";
import styled, { keyframes, withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

import theme from '../../styles/theme'

import { ContentWrapper } from "components/ContentWrapper";
import { PrimaryButton } from "components/Button";
import Particles from 'react-particles-js';
import { ExternalLinks } from 'components/ExternalLinks';
// import { AboutSection } from "components/AboutSection";
// import { PortfolioSection } from "components/PortfolioSection";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { fadeIn } from 'react-animations';
import { ParticleBackground } from 'components/ParticleBackground';
import { HeadingWrapper } from 'components/HeadingWrapper';


const Wrapper = styled.div`
  ${props => props.theme.flex.center};
  color: ${props => props.theme.colors.mainText};
  background: ${props => props.theme.colors.mainBackground};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${props => props.theme.colors.mainBackground};
  // height: calc(100vh - ${props => props.theme.dimensions.navbar.height});
  height: 100vh;
`;

const MainHeading = styled.h1`
  margin-bottom: ${props => props.theme.padding.eight};
  color: ${props => props.theme.colors.mainText};
`;

const SubHeading = styled.h1``;

const MainText = styled.h4`
  margin-bottom: ${props => props.theme.padding.twentyFour};
    color: ${props => props.theme.colors.mainText};
    text-align: center;
`;

const Links = styled.p``;

const StyledParticles = styled(Particles)`
    position: absolute;
    height: 100vh;
    width: 100%;
    // z-index: -100;
`;

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    animation: 1s ${fadeAnimation};
`;

class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          dotsFreq: 7,
          typingCompleted: true,
      };
  }
  componentDidMount() {
      document.title = "Kyle Lane";
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <ParticleBackground numParticles={5} />
            <ExternalLinks />
              <HeadingWrapper>
                {/*<MainHeading>{this.state.heading}</MainHeading>*/}
                  <MainHeading>
                      <Typist
                          cursor={{
                              show: true,
                              blink: true,
                              element: '|',
                              hideWhenDone: false,
                              hideWhenDoneDelay: 2000,
                          }}
                          // onTypingDone={()=>this.setTypingCompleted()}
                      >
                          <span>Hello, World! </span>
                          <Typist.Backspace count={14} delay={300} />
                          <span>I'm Kyle. </span>
                      </Typist>
                  </MainHeading>
                {/*<SubHeading>I'm Kyle</SubHeading>*/}
                <MainText>
                  I love meeting new people and learning new things!
                </MainText>
                <Links>
                  <Link to="/about">
                    <PrimaryButton>About Me</PrimaryButton>
                  </Link>{" "}
                  <Link to="/portfolio">
                    <PrimaryButton>Portfolio</PrimaryButton>
                  </Link>
                </Links>
              </HeadingWrapper>
        </Wrapper>
        {/* <AboutSection />
    <PortfolioSection /> */}
      </React.Fragment>
    );
  }
}

export default withTheme(Home);
