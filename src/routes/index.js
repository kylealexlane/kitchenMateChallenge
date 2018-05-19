import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import styled, { withTheme } from "styled-components";
import { history } from "store";

import { HomeContainer, AboutContainer } from "containers";
import {
  CognitePortfolioPage,
  SlikPortfolioPage,
  JobminePortfolioPage,
  PathPortfolioPage,
  PlanItPortfolioPage
} from "components/PortfolioPages";
// import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import { PortfolioSection } from "components/PortfolioSection";

import Cognite from "assets/portfolio/cognite/cognitePreview.png";
import Slik from "assets/portfolio/slikPortfolio/slikPortfolioPreview.png";
import Jobmine from "assets/portfolio/jobmine/jobminePreview.png";
import Path from "assets/portfolio/path/pathPreview.png";
import PlanIt from "assets/portfolio/planIt/planItPreview.png";

import { ParticleBackground } from 'components/ParticleBackground';

const Container = styled.div`
  text-align: left;
`;

const PortfolioPages = [
  {
    id: 1,
    title: "Cognite",
    link: "/portfolio/cognite",
    component: CognitePortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: Cognite,
    backgroundColor: "cogniteGradient"
  },
  {
    id: 2,
    title: "Slik",
    link: "/portfolio/slik",
    component: SlikPortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: Slik
  },
  {
    id: 3,
    title: "Jobmine",
    link: "/portfolio/jobmine",
    component: JobminePortfolioPage,
    subHeading: "UI/UX Design & Human Factors",
    gridImage: Jobmine
  },
  {
    id: 4,
    title: "Path",
    link: "/portfolio/path",
    component: PathPortfolioPage,
    subHeading: "App Design & Development",
    gridImage: Path
  },
  {
    id: 5,
    title: "Plan It",
    link: "/portfolio/planit",
    component: PlanItPortfolioPage,
    subHeading: "Game Design & Development",
    gridImage: PlanIt
  }
];

function mapPortfolioPages() {
  return PortfolioPages.map((Page, index) => {
    const next = index === PortfolioPages.length - 1 ? 0 : index + 1;
    const previous = index === 0 ? PortfolioPages.length - 1 : index - 1;
    return (
      <Route
        exact
        key={Page.id}
        path={Page.link}
        render={() => (
          <Page.component
            key={Page.id}
            id={Page.id}
            title={Page.title}
            subHeading={Page.subHeading}
            next={PortfolioPages[next]}
            previous={PortfolioPages[previous]}
          />
        )}
      />
    );
  });
}

function Routes() {
  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        {/*<NavBar />*/}
        <Container>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={AboutContainer} />
          <Route
            exact
            path="/portfolio"
            render={() => <PortfolioSection content={PortfolioPages} />}
          />
          {mapPortfolioPages()}
        </Container>
        {/* <Footer /> */}
      </React.Fragment>
    </ConnectedRouter>
  );
}

export default withTheme(Routes);
