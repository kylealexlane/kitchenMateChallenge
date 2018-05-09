import React from 'react';
// import styled from 'styled-components';

import { PortfolioPageHeader } from 'components/PortfolioPageHeader';
import { MainSection } from 'components/MainSection';
import { NavBar } from 'components/NavBar';
import { MainText, MainTextHeading } from 'components/PortfolioPageText';

const PlanItPortfolioPage = () => (
  <React.Fragment>
    <NavBar />
    <PortfolioPageHeader
      mainHeading="Plan It"
      keywords="UI/UX Design | Game Development"
      description="A design and implementation of Plan It, a one button puzzle block game."
    />
    <MainSection>
      <MainText>
        <MainTextHeading>Background:</MainTextHeading>
        For my Human Factors in Design course, the major project was completing
        a redesign. Through a series of 1 hour design sprints, from preparing a
        Situation of Concern Table, to the FTA and HTA, we evaluated the current
        problems with the UI / UX, and after 8 sprints, proposed a redesign of
        Jobmine for our persona.
        <MainTextHeading>Problem:</MainTextHeading>
        <MainTextHeading>Goal:</MainTextHeading>
        Redesign Jobmine to have a better user experience, focusing specifically
        on Human Factors.
        <MainTextHeading>Implementation:</MainTextHeading>
        <MainTextHeading>Comments:</MainTextHeading>
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

export default PlanItPortfolioPage;
