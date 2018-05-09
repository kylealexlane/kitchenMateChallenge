import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Background from 'assets/portfolio/planIt/planItPreview.png';

// const Container = styled(Link)`
//   @media (min-width: ${props => props.theme.breakpoints.md}) {
//     width: 48%;
//   }
//   width: 100%;
//   outline: none;
//   position: relative;
//   &:hover > div > div > * {
//     color: ${props => props.theme.colors.text.dark};
//   }
//   &:hover > div > div {
//     background: rgba(255, 255, 255, 0.9);
//   }
// `;

const Container = styled(Link)`
  width: 100%;
  margin-bottom: ${props => props.theme.padding.thirtyTwo};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 48%;
  }
`;

const Wrapper = styled.img`
  width: 100%;
`;

// const Wrapper = styled.div`
//   background: url(${props => props.background});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   position: relative;
//   width: 100%;
//   top: 0;
//   left: 0;
//   padding-top: 60%;
//   margin: 20px 0;
// `;

// const Details = styled.div`
//   display: flex;
//   text-align: left;
//   flex-direction: column;
//   z-index: 2;
//   position: absolute;
//   background: rgba(255, 255, 255, 0);
//   top: 0;
//   width: 100%;
//   height: 100%;
//   transition: 0.2s all;
//   > * {
//     color: rgba(0, 0, 0, 0);
//   }
// `;

// const Details = styled.div``;

const MainHeading = styled.h1`
  padding-bottom: ${props => props.theme.padding.twentyFour};
`;

const SubHeading = styled.h3``;

const PortfolioGridItem = props => (
  <Container to={props.link}>
    <Wrapper src={props.background} />
  </Container>
);

// <Details>
//   <MainHeading>{props.mainHeading}</MainHeading>
//   <SubHeading>{props.subHeading}</SubHeading>
// </Details>

PortfolioGridItem.propTypes = {
  mainHeading: PropTypes.string,
  subHeading: PropTypes.string,
  background: PropTypes.string,
  link: PropTypes.string,
};

PortfolioGridItem.defaultProps = {
  mainHeading: '',
  subHeading: '',
  background: Background,
  link: '',
};

export default PortfolioGridItem;
