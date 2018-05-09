import React from 'react';
import styled from 'styled-components';

import { PortfolioPageHeader } from 'components/PortfolioPageHeader';
import { MainSection } from 'components/MainSection';
import { NavBar } from 'components/NavBar';
import {
  MainText,
  MainTextSubHeading,
  MainTextHeading,
} from 'components/PortfolioPageText';

import jobmineOld from 'assets/portfolio/jobmine/jobmineOld.png';

import soc from 'assets/portfolio/jobmine/1soc.jpg';
import currentDesign from 'assets/portfolio/jobmine/2currentDesign.JPG';
import personas from 'assets/portfolio/jobmine/3personas.JPG';
import userRequirements from 'assets/portfolio/jobmine/4userRequirements.JPG';
import designWalkthrough from 'assets/portfolio/jobmine/5designWalkthrough.JPG';
import heuristicEvaluation from 'assets/portfolio/jobmine/6heuristicEvaluation.JPG';
import fta from 'assets/portfolio/jobmine/7fta.JPG';
import hta from 'assets/portfolio/jobmine/8hta.JPG';
import displayControls from 'assets/portfolio/jobmine/9displayControls.JPG';

import jobmine1 from 'assets/portfolio/jobmine/jobmine1.png';
import jobmine2 from 'assets/portfolio/jobmine/jobmine2.png';
import jobmine3 from 'assets/portfolio/jobmine/jobmine3.png';
import jobmine4 from 'assets/portfolio/jobmine/jobmine4.jpg';

const FlexWrapper = styled.div`
  ${props => props.theme.flex.spaceBetween};
  flex-wrap: wrap;
`;

const IntroImage = styled.img`
  margin-top: ${props => props.theme.padding.sixteen};
  width: 100%;
`;

const SprintImageCaption = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
  margin-bottom: ${props => props.theme.padding.sixteen};
`;

const ProcessImage = styled.img`
  width: 100%;
  margin-bottom: ${props => props.theme.padding.eight};
`;

const SolutionProcessImage = styled.img`
  width: 49%;
  height: 100%;
  margin-bottom: ${props => props.theme.padding.sixteen};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const CognitePortfolioPage = () => (
  <React.Fragment>
    <NavBar />
    <PortfolioPageHeader
      mainHeading="Cognite"
      keywords="UI/UX Design | Web Development"
      description="A redesign of Cognite's company website."
    />
    <MainSection>
      <MainText>
        <MainTextHeading>Background:</MainTextHeading>
        While working at Cognite on the Front End / Design Team, a successful
        startup creating an inustrial dta platform. They had grown to 50
        employees during their first year as a company, and large recruiting
        efforts continued to be made in order to fulfill client requests.
        <MainTextHeading>Problem:</MainTextHeading>
        A large blocker to Cognite's recruiting efforts was the quality of their
        site. This was a quick website thrown together on Wordpress, since it
        was not Cognite's priority at the time. However, with the increasing
        recruiting demand, it was difficult to attract people to the Front End /
        Design team since the website did not reflect strong Front End
        Development and Design skills at the company.
        <IntroImage src={jobmineOld} alt={jobmineOld} />
        <MainTextHeading>Goal:</MainTextHeading>
        Redesign Cognite's website to have a better user experience and upgraded
        content, to give a better representation of working at Cognite and
        ultimately support Cognite's recruiting efforts.
        <MainTextHeading>Process:</MainTextHeading>
        The first thing I did, was address the main problems with the current
        website, and set goals for how to improve them.
        <br />
        1. The content was dry, and did not effectively showcase the values of
        Cognite.
        <br />
        2. The website was not responsive, thus had a very poor user experience
        on mobile.
        <br />
        3. The website was not very visually appealing.
        <br />
        4. The "vibe" from the website seemed very corporate, rather than a fun,
        tech start-up. This made it very difficult to attract young talent.
        <MainTextHeading>Proposed Solution:</MainTextHeading>
        After multiple iterations, a final design was approved and launched.
        <FlexWrapper>
          <SolutionProcessImage src={jobmine1} alt={jobmine1} />
          <SolutionProcessImage src={jobmine2} alt={jobmine2} />
          <SolutionProcessImage src={jobmine3} alt={jobmine3} />
          <SolutionProcessImage src={jobmine4} alt={jobmine4} />
        </FlexWrapper>
        Check out the live site{' '}
        <a href="http://www.cognite.com" target="_new">
          here
        </a>!
        <MainTextHeading>Results:</MainTextHeading>
        This was a redesign completed for a school course, with certain criteria
        that needed to be attained. All sprints were timed, and there was no
        chance to do a second iteration. Often times, an impulsive design
        decision had to be made, and this was not usually the best choice.
        <br />
        <br />
        That being said, the design is far from perfect, and there are many
        changes I would make given the chance for the second iteration. I felt
        some of the tools used in the sprint were not optimal for redesigning
        Jobmine, but regardless, this was a great project in which I learned and
        was able to apply a lot of UI/UX and Human Factors skills.
      </MainText>
    </MainSection>
  </React.Fragment>
);

export default CognitePortfolioPage;
