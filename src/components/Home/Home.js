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

import Sun from "assets/sun.png";
import Earth from "assets/earth.png";


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

const SunImage = styled.img`
  position: absolute;
   height: 200px;
   width: 200px;
   top: -100px;
   left: -100px;
`;

const EarthImage = styled.img`
  position: absolute;
   height: 80px;
   width: 80px;
   bottom: 0;
`;

class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          // heading: '',
          dotsFreq: 20,
          typingCompleted: true,
      };
  }
  componentDidMount() {
      document.title = "Kyle Lane";
      // setTimeout(()=>{ this.renderHelloWorld(); }, 1000);
  }
  
  render() {
      console.log('rendering', this.state);
      const mainBackground = this.props.theme.colors.mainText;
    return (
      <React.Fragment>
        <Wrapper>
            {this.state.typingCompleted &&
            <FadeDiv>
                <StyledParticles params={{
                    particles: {
                        number: {
                            value: this.state.dotsFreq,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: mainBackground
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000"
                            },
                            polygon: {
                                nb_sides: 5
                            },
                            // image: {
                            //     src: "img/github.svg",
                            //     width: 100,
                            //     height: 100
                            // }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 80,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: false,
                            distance: 300,
                            color: "#000000",
                            opacity: 0.03,
                            width: 1
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: false,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 800,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 800,
                                    size: 80,
                                    duration: 2,
                                    opacity: 0.8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 400,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                    }}}
                />
            </FadeDiv>}
            {/*<SunImage src={Sun} alt="Sun" />*/}
          {/*<EarthImage src={Earth} alt="Earth" />*/}
            <ExternalLinks />
              <ContentWrapper>
                {/*<MainHeading>{this.state.heading}</MainHeading>*/}
                  <MainHeading>
                      <Typist
                          cursor={{
                              show: true,
                              blink: true,
                              element: '|',
                              hideWhenDone: true,
                              hideWhenDoneDelay: 2000,
                          }}
                          // onTypingDone={()=>this.setTypingCompleted()}
                      >
                          <span>Hello, World! </span>
                          <Typist.Backspace count={14} delay={300} />
                          <span>I'm Kyle! </span>
                      </Typist>
                  </MainHeading>
                {/*<SubHeading>I'm Kyle</SubHeading>*/}
                <MainText>
                  I'm studying at the University of Waterloo and searching for a{" "}
                  <strong>Fall 2018</strong> internship opportunity
                </MainText>
                <Links>
                  <Link to="/about">
                    <PrimaryButton>About Me</PrimaryButton>
                  </Link>{" "}
                  <Link to="/portfolio">
                    <PrimaryButton>Portfolio</PrimaryButton>
                  </Link>
                </Links>
              </ContentWrapper>
        </Wrapper>
        {/* <AboutSection />
    <PortfolioSection /> */}
      </React.Fragment>
    );
  }
}

export default withTheme(Home);
