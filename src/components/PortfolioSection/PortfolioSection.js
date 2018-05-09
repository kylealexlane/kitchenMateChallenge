import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Header } from 'components/Header';
import { MainSection } from 'components/MainSection';
import { PortfolioGridItem } from 'components/PortfolioGridItem';

import Cognite from 'assets/portfolio/cognite/cognitePreview.png';
import Slik from 'assets/portfolio/slikPortfolio/slikPortfolioPreview.png';
import Jobmine from 'assets/portfolio/jobmine/jobminePreview.png';
import Path from 'assets/portfolio/path/pathPreview.png';
import PlanIt from 'assets/portfolio/planIt/planItPreview.png';

const PortfolioGrid = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PortfolioSection = props => (
  <React.Fragment>
    <Header
      mainHeading="Portfolio"
      background={props.theme.colors.background.white}
      color={props.theme.colors.text.black}
    />
    <MainSection
      background={props.theme.colors.background.white}
      color={props.theme.colors.text.black}
    >
      <PortfolioGrid>
        <PortfolioGridItem background={Cognite} link="/portfolio/cognite" />
        <PortfolioGridItem background={Slik} link="/portfolio/slik" />
        <PortfolioGridItem background={Jobmine} link="/portfolio/jobmine" />
        <PortfolioGridItem background={Path} link="/portfolio/path" />
        <PortfolioGridItem background={PlanIt} link="/portfolio/planit" />
      </PortfolioGrid>
    </MainSection>
  </React.Fragment>
);

PortfolioSection.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.objectOf(PropTypes.string),
      background: PropTypes.objectOf(PropTypes.string),
    }),
  }).isRequired,
};

export default withTheme(PortfolioSection);
