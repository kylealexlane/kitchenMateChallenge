import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

import * as PropShapes from "utils/propShapes";
import { Header } from "components/Header";
import { MainSection } from "components/MainSection";
import { PortfolioGridItem } from "components/PortfolioGridItem";

const PortfolioGrid = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

class PortfolioSection extends React.Component {
  componentDidMount() {
    document.title = "Kyle L | Portfolio";
  }
  render() {
    return (
      <React.Fragment>
        {/*<Header*/}
          {/*mainHeading="Projects"*/}
          {/*background={this.props.theme.colors.background.white}*/}
          {/*color={this.props.theme.colors.text.black}*/}
        {/*/>*/}
        {/*<MainSection*/}
          {/*background={this.props.theme.colors.background.white}*/}
          {/*color={this.props.theme.colors.text.black}*/}
        {/*>*/}
          {/*<PortfolioGrid>*/}
            {/*{this.props.content.map(page => (*/}
              {/*<PortfolioGridItem*/}
                {/*key={page.id}*/}
                {/*background={page.gridImage}*/}
                {/*link={page.link}*/}
                {/*mainHeading={page.title}*/}
                {/*subHeading={page.subHeading}*/}
              {/*/>*/}
            {/*))}*/}
          {/*</PortfolioGrid>*/}
        {/*</MainSection>*/}
      </React.Fragment>
    );
  }
}

PortfolioSection.propTypes = {
  content: PropTypes.arrayOf(PropShapes.portfolioData),
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.objectOf(PropTypes.func),
      background: PropTypes.objectOf(PropTypes.func)
    })
  }).isRequired
};

export default withTheme(PortfolioSection);
