import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ExternalLinks } from '../../components/ExternalLinks';

import { MainSection } from "../../components/MainSection";
import { Header } from "../../components/Header";
import { PrimaryButton } from "../../components/Button";
import AvatarOne from "../../assets/svgs/mountainBiker.svg";
import AvatarTwo from "../../assets/svgs/cloudLightning.svg";
import AvatarThree from "../../assets/svgs/Laptop.svg";
import Resume from "../../assets/resume.pdf";
import { ParticleBackground } from '../../components/ParticleBackground';
import AboutContainer from "../../containers/About/About";
import MountainsDark from '../../assets/pngs/mountainsDark.png';
import { AboutMeTabs } from '../../components/AboutMeTabs';

const TextAvatarGroup = styled.div`
  ${props => props.theme.flex.flexColumnCenter};
  width: 100%;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
  margin-bottom: ${props => props.theme.padding.fourtyEight};
`;

const RowOfIcons = styled.div`
  ${props => props.theme.flex.spaceAround};
  align-items: center;
  margin-bottom: ${props => props.theme.padding.fourtyEight};
`;

const MainText = styled.p`
  color: ${props => props.theme.colors.mainText};
`;
//
// const Link = styled.button`
//   color: ${props => props.theme.colors.primary};
// `;

const AvatarText = MainText.extend`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.mainBackground};
  color: ${props => props.theme.colors.mainText};
  height: 100%;
  width: 100%;
`;

const MountainDarkImage = styled.img`
  position: fixed;
  bottom: 0;
  right:0;
  width: 50%;
  height: auto;
  attachment: fixed;
`;

const AvatarImage = styled.img`
  fill: ${props => props.theme.colors.mainText};
  height: auto;
  width: 80px;
  margin-top: 44px;
  margin-bottom: 32px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

const NotSelectedImage = styled.img`
  fill: ${props => props.theme.colors.secondaryText};
  height: auto;
  width: 50px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: 0 0 ${props => props.theme.padding.thirtyTwo} 0;
  }
`;

const Heading = styled.h3`
  text-align: center;
  color: ${props => props.theme.colors.mainText};
  margin-bottom: ${props => props.theme.padding.twentyFour};
`;

class AboutController extends React.Component {
  constructor(props) {
    super(props);
    this.changeSelectedTab = this.changeSelectedTab.bind(this);
    this.state = {
      tabSelected: 0,
    };
  }
  componentDidMount() {
    document.title = "Kyle L | About";
  }

  changeSelectedTab(event, value) {
    this.setState({ tabSelected: value });
  }

  render() {
    return (
      <React.Fragment>
        <ParticleBackground
          numParticles={2}
          color={this.props.theme.colors.mainText}
        />
        <MountainDarkImage src={MountainsDark}/>
        <Wrapper>
          <ExternalLinks />
          <Header
            mainHeading="About Me"
            background="transparent"
            color={this.props.theme.colors.mainText}
          />
          <MainSection
            background="transparent"
          >
            <AboutMeTabs
              callback={this.changeSelectedTab}
            />
            {this.state.tabSelected === 0 &&
              <TextAvatarGroup>
                <AvatarImage src={AvatarOne} alt="AvatarOne" />
                <Heading>So... Who Am I?</Heading>
                <AvatarText>
                  {"Well, I'm currently studying Systems Design Engineering at the University of Waterloo, pursuing an " +
                  "option in Intelligent Systems and minor in Economics. More importantly though, I love staying active " +
                  "and meeting new people. If I'm not studying, you can find me out on the trails mountain biking, organizing " +
                  "some pick-up games with friends, or trying out that 'awesome' new restaurant."}
                </AvatarText>
              </TextAvatarGroup>
            }

            {this.state.tabSelected === 1 &&
            <TextAvatarGroup>
              <AvatarImage src={AvatarTwo} alt="AvatarTwo"/>
              <AvatarText>
                <Heading>What About the Rainy Days?</Heading>
                {"Along with playing sports I'm just as passionate about the analytics and statistics side of athletics. " +
                "I'm currently developing new metrics for valuing NHL players at thepuckluck.com along with creating an  " +
                "nba app for displaying more in depth statistics. Oh... I also really love board games (anyone up for Catan?!?)."}
                {/*<br />*/}
                {/*<br />*/}
                {/*<Link to="/portfolio">*/}
                {/*<PrimaryButton>Okay Okay.. Now The Good Stuff</PrimaryButton>*/}
                {/*</Link>*/}
              </AvatarText>
            </TextAvatarGroup>
            }

            {this.state.tabSelected === 2 &&
            <TextAvatarGroup>
              <AvatarImage src={AvatarThree} alt="AvatarThree"/>
              <AvatarText>
                <Heading>Okay Okay.. Now The Good Stuff</Heading>
                {"I know it sounds cliche, but I really enjoy learning new things and diving into difficult challenges. " +
                "Whether it's impulsively signing up for half-marathons (hopefully a full marathon soon) or developing " +
                "new sport related applications in my free time, I like staying busy and being pushed. I am currently seeking " +
                "an internship for Summer 2019 and would love to chat if you are interested in learning more about my " +
                "experiences!"}
              </AvatarText>
            </TextAvatarGroup>
            }
          </MainSection>
        </Wrapper>
      </React.Fragment>
    );
  }
}

// AboutController.propTypes = {
//   theme: PropTypes.shape({
//     colors: PropTypes.shape({
//       text: PropTypes.objectOf(PropTypes.string),
//       background: PropTypes.objectOf(PropTypes.string)
//     })
//   }).isRequired
// };

export default withTheme(AboutController);