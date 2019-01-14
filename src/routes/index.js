import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import styled, { withTheme } from "styled-components";
import { history } from "../store";

import { HomeContainer, AboutContainer } from "../containers";
import { PortfolioSection } from "../components/PortfolioSection";

const Container = styled.div`
  text-align: left;
`;

function Routes() {
  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Container>
          {/*<Route exact path={process.env.PUBLIC_URL + "/"} component={HomeContainer} />*/}
          <Route exact path={"/"} component={HomeContainer} />
          <Route exact path={"/about"} component={AboutContainer} />
          <Route exact path={"/portfolio"} component={PortfolioSection} />
        </Container>
      </React.Fragment>
    </ConnectedRouter>
  );
}

export default withTheme(Routes);
