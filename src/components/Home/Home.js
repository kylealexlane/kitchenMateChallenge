import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ContentWrapper } from 'components/ContentWrapper';

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
  color: ${props => props.theme.colors.text.black};
  background: ${props => props.theme.colors.background.white};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`;

const MainHeading = styled.h1`
  padding-bottom: ${props => props.theme.padding.twentyFour};
`;

const SubHeading = styled.h3``;

const Home = props => (
  <Wrapper background={props.background}>
    <ContentWrapper>
      <MainHeading>{props.mainHeading}</MainHeading>
      <SubHeading>{props.subHeading}</SubHeading>
    </ContentWrapper>
    {props.children}
  </Wrapper>
);

Home.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  background: PropTypes.string,
  children: PropTypes.node,
};

Home.defaultProps = {
  background: '',
  children: null,
};

export default Home;
