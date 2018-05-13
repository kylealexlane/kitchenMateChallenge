import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

import { ContentWrapper } from "components/ContentWrapper";
import { PrimaryButton } from "components/Button";
// import { AboutSection } from "components/AboutSection";
// import { PortfolioSection } from "components/PortfolioSection";

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
  color: ${props => props.theme.colors.text.black};
  background: ${props => props.theme.colors.background.white};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vh - ${props => props.theme.dimensions.navbar.height});
`;

const MainHeading = styled.h1`
  margin-bottom: ${props => props.theme.padding.eight};
`;

const SubHeading = styled.h3``;

const MainText = styled.h4`
  margin-bottom: ${props => props.theme.padding.twentyFour};
`;

const Links = styled.p``;

class Home extends React.Component {
  componentDidMount() {
    document.title = "Jessie Won";
  }
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <ContentWrapper>
            <MainHeading>Jessie Won</MainHeading>
            <SubHeading>Designer, Engineer, and Major Foodie</SubHeading>
            <MainText>
              Currently studying in Waterloo and searching for a{" "}
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

export default Home;
