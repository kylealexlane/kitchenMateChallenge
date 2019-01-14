import React from "react";
import styled, { keyframes, withTheme } from "styled-components";
import { Link } from "react-router-dom";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { fadeIn } from 'react-animations';
import Particles from 'react-particles-js';
import { BorderButton } from "../../components/Button";
import { ExternalLinks } from '../../components/ExternalLinks';
import { ParticleBackground } from '../../components/ParticleBackground';
import { HeadingWrapper } from '../../components/HeadingWrapper';
import Resume from "../../assets/resume.pdf";


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

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
`;

const StyledA = styled.a`
  color: #1D9696;
`;

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
    animation: 4s ${fadeAnimation};
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
          <FadeDiv>
            <ParticleBackground numParticles={5} color={this.props.theme.colors.mainText}/>
          </FadeDiv>
            <ExternalLinks fromHome={true} />
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
                <MainText>
                  I'm an engineering student with passion for sports and analytics!<br />
                  Check out my current project <StyledA href="https://www.thepuckluck.com">thepuckluck.com</StyledA> or discover more below.
                </MainText>
                <Links>
                  <StyledLink to="/about">
                    <BorderButton>About Me</BorderButton>
                  </StyledLink>
                  <StyledLink to="/portfolio">
                    <BorderButton middleButton={true} >Portfolio</BorderButton>
                  </StyledLink>
                  <a
                    onClick={() => {
                      window.open(Resume);
                    }}
                  >
                    <BorderButton >Resume</BorderButton>
                  </a>
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
