import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';
import { history } from 'store';

import { HomeContainer, AboutContainer, PortfolioContainer } from 'containers';
import { CognitePortfolioPage } from 'components/CognitePortfolioPage';
import { SlikPortfolioPage } from 'components/SlikPortfolioPage';
import { JobminePortfolioPage } from 'components/JobminePortfolioPage';
import { PlanItPortfolioPage } from 'components/PlanItPortfolioPage';
import { Footer } from 'components/Footer';
import { NavBar } from 'components/NavBar';

const Container = styled.div`
  text-align: left;
`;

function Routes() {
  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        <NavBar />
        <Container>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={AboutContainer} />
          <Route exact path="/portfolio" component={PortfolioContainer} />
          <Route
            exact
            path="/portfolio/cognite"
            component={CognitePortfolioPage}
          />
          <Route exact path="/portfolio/slik" component={SlikPortfolioPage} />
          <Route
            exact
            path="/portfolio/jobmine"
            component={JobminePortfolioPage}
          />
          <Route
            exact
            path="/portfolio/planit"
            component={PlanItPortfolioPage}
          />
        </Container>
      </React.Fragment>
    </ConnectedRouter>
  );
}

export default Routes;
