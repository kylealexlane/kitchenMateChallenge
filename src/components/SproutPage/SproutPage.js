import React from "react";
import styled, { keyframes, withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

import theme from '../../styles/theme'

import { HeadingWrapper } from "components/HeadingWrapper";
import { PrimaryButton } from "components/Button";
import Particles from 'react-particles-js';
import { ExternalLinks } from 'components/ExternalLinks';
import "styles/main.css";
// import { AboutSection } from "components/AboutSection";
// import { PortfolioSection } from "components/PortfolioSection";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { fadeIn, bounce } from 'react-animations';
import { Icon } from "antd";
import { CustomizedTabs } from "components/CustomizedTabs";
import { MobilePhone } from 'components/MobilePhone';
import ApplePNG from 'assets/pngs/apple.png';
import AndroidPNG from 'assets/pngs/android.png';
import CSSPNG from 'assets/pngs/css.png';
import JsPNG from 'assets/pngs/javascript.png';
import ReactPNG from 'assets/pngs/react.png';
import DBPNG from 'assets/pngs/db.png';
import MySQLPHPPNG from 'assets/pngs/phpsql.png';

import SproutHome from 'assets/sproutScreenshots/SproutHome.png';
import SproutTrackHome from 'assets/sproutScreenshots/SproutTrackHome.png';
import SproutDrinkUp from 'assets/sproutScreenshots/SproutDrinkUp.png';
import SproutMeTab from 'assets/sproutScreenshots/SproutMeTab.png';
import SproutAppsDevices from 'assets/sproutScreenshots/SproutAppsDevices.png';
import { ParticleBackground } from 'components/ParticleBackground';

import SproutLogo from 'assets/pngs/SproutLogoCropped.png'



const images = [SproutTrackHome, SproutHome, SproutDrinkUp, SproutAppsDevices, SproutMeTab];

const MainHeading = styled.h1`
  color: ${props => props.theme.colors.mainText};
`;

const HeadingText = styled.h3`
  margin-bottom: ${props => props.theme.padding.eight};
  color: ${props => props.theme.colors.mainText};
`;

const MainText = styled.h4`
  margin-bottom: ${props => props.theme.padding.twentyFour};
    color: ${props => props.theme.colors.mainText};

`;

const RowDiv = styled.div`
  ${props => props.theme.flex.flexRowJustifyStart};
  color: ${props => props.theme.colors.mainText};
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const HeaderRowDiv = styled.div`
  ${props => props.theme.flex.flexRowJustifyStart};
  color: ${props => props.theme.colors.mainText};
  align-items: flex-start;
  margin-bottom: 24;
`;

const TechRowDiv = styled.div`
  ${props => props.theme.flex.flexRowJustifyStart};
  color: ${props => props.theme.colors.mainText};
  align-items: flex-start;
`;

const ColumnDiv = styled.div`
  ${props => props.theme.flex.flexColumnCenter};
  flex: 1;
  height: fit-content;
  margin-top: 150;
`;

const MarginTopDiv = styled.div`
  margin-top: 60px;
`;

const StyledImage = styled.img`
  height: 50px;
  padding-right: 12px;
  width: auto;
`;

const AppImage = styled.img`
  height: 90px;
  padding-right: 14px;
  width: auto;
`;

class SproutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotsFreq: 7,
      typingCompleted: true,
      currentImage: SproutTrackHome,
    };
  }
  componentDidMount() {
    document.title = "K.L | Sprout";
    this.rotateImages();
  }

  rotateImages() {
    let currentIndex = 0;
    setInterval(() => {
      ++currentIndex;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      this.setState({ currentImage: images[currentIndex] });
    }, 6000);
  }

  render() {
    return (
      <React.Fragment>
        <HeadingWrapper>
          <MarginTopDiv>
          <ColumnDiv>
            <RowDiv>
              <ColumnDiv>
                <MobilePhone animation={'left'} pic={this.state.currentImage}/>
              </ColumnDiv>
              <ColumnDiv>
                <HeaderRowDiv>
                  <AppImage src={SproutLogo} />
                  <MainHeading>
                    <Typist
                      cursor={{
                        show: true,
                        blink: true,
                        element: '|',
                        hideWhenDone: false,
                        hideWhenDoneDelay: 2000,
                      }}
                    >
                      <span>Sprout </span>
                    </Typist>
                  </MainHeading>
                </HeaderRowDiv>
                <HeadingText>GOAL</HeadingText>
                <MainText>
                  Improve corporate wellness, employee retention, and office productivity.
                </MainText>
                <HeadingText>SOLUTION</HeadingText>
                <MainText>
                  Track activities, reach goals, stay up to date with co-workers, and much more with the Sprout mobile app.
                </MainText>
                <HeadingText>DEV</HeadingText>
                <MainText>
                  Worked at Sprout developing their new mobile app in React Native for over 3 million users worldwide.
                  Owned development of key features including home dashboard, activity tracking, all common components, and more.
                </MainText>
                {/*<HeadingText>CURRENTLY ON APPLE TEST FLIGHT AND GOOGLE PLAY </HeadingText>*/}
                {/*<HeadingText>BUILT WITH</HeadingText>*/}
                <TechRowDiv>
                  <StyledImage src={ApplePNG} />
                  <StyledImage src={AndroidPNG} />
                  {/*<StyledImage src={CSSPNG} />*/}
                  <StyledImage src={JsPNG} />
                  <StyledImage src={ReactPNG} />
                  <StyledImage src={DBPNG} />
                  <StyledImage src={MySQLPHPPNG} />
                </TechRowDiv>
              </ColumnDiv>
            </RowDiv>
          </ColumnDiv>
          </MarginTopDiv>
        </HeadingWrapper>
      </React.Fragment>
    );
  }
}

export default withTheme(SproutPage);