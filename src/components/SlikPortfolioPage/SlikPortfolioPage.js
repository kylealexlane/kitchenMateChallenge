import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

// import { ContentWrapper } from 'components/ContentWrapper';
import { PortfolioPageHeader } from 'components/PortfolioPageHeader';
import { MainSection } from 'components/MainSection';
import { NavBar } from 'components/NavBar';
import { MainText, MainTextHeading } from 'components/PortfolioPageText';

const SlikPortfolioPage = props => (
  <React.Fragment>
    <NavBar background={props.theme.colors.background.slikGradient} />
    <PortfolioPageHeader
      mainHeading="Slik Portfolio"
      keywords="Web Development | UI/UX"
      description="A redesign of the Slik Portfolio catalog, a boutique line of baths, shower doors, and low-profile bases."
      next="/portfolio/jobmine"
      previous="/portfolio/planit"
    />
    <MainSection>
      <MainText>
        <MainTextHeading>Background:</MainTextHeading>
        During my second internship at The Tomlin Group, I was tasked to upgrade
        the SLIK Portfolio physical catalog into a web platform. Since the
        plumbing industry was not very computerized, this was one of the first
        in their specific market. That being said, there was not too much to
        work with. I was handed a physical printed catalog, and the online pdf
        version for the Slik Portfolio line of baths. This project had been
        completed previously attempted by an external company, but the results
        were not as they had hoped, and did not align with the company vision.
        That being said, they did not exactly know what they wanted, and so I
        started from scratch in designing the online catalog.
        <MainTextHeading>Problem:</MainTextHeading>
        Every time a Slik Portfolio product was updated, anything from a small
        tag change to adding a new product, the catalog pdf would need to be
        reprinted. Each catalog cost approximately 45CAD to print, and thus,
        this was not an optimal process for a constantly changing product line.
        <MainTextHeading>Goal:</MainTextHeading>
        Design and implement an online catalog that would allow customers to
        browse through all products in the Slik Portfolio line, while aligning
        with the product vision and being easy to update.
        <MainTextHeading>Implementation:</MainTextHeading>
        As aforementioned, solving this problem had been attempted by an
        external company, but the result did not align with the company vision.
        The biggest concerns were that this website was non-responsive, and had
        an non-ideal user experience, even on desktop. There were about 30 items
        in each collection, but having each item displayed vertically after one
        another, and no fixed menu bar, it was very difficult to see more than 3
        items in a collection at a time, as well as understand what collection
        the user was on. It was also difficult to navigate between items, and
        ultimately, the design did not resemble that of a high-end product line.
        <br />
        <br />
        BEFORE:
        <br />
        In order to solve these problems, I first started off with simple
        sketches of a catalog template. I wanted something that was simple and
        clean, since this was the vibe of the product.
        <br />
        <br />
        Starting from scratch, I implemented a basic MySQL database, then
        designed and developed the digital catalog. From designing the icons,
        editing images to the front-end and back-end development, the company
        preferred this interface over their current site. I was later tasked to
        update and redesign their entire website. Here is a preview of the
        upgrade!
      </MainText>
    </MainSection>
  </React.Fragment>
);

SlikPortfolioPage.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.objectOf(PropTypes.string),
      background: PropTypes.objectOf(PropTypes.string),
    }),
  }).isRequired,
};

export default withTheme(SlikPortfolioPage);
