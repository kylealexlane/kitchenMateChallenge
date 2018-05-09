import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ContentWrapper } from 'components/ContentWrapper';

const Wrapper = styled.header`
  ${props => props.theme.flex.center};
  align-items: center;
  color: ${props => props.color || props.theme.colors.text.white};
  background: ${props =>
    props.background || props.theme.colors.background.black};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: ${props => props.theme.padding.eighty} 0;
`;

const Content = styled(ContentWrapper)`
  ${props => props.theme.flex.spaceBetween};
  flex-direction: row;
`;

const ProjectTitle = styled.h1`
  padding-bottom: ${props => props.theme.padding.eight};
`;

const Keywords = styled.h3`
  padding-bottom: ${props => props.theme.padding.twentyFour};
`;

const Description = styled.h4``;

const ChangePage = styled(NavLink)`
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    display: none;
  }
`;

const Header = props => (
  <Wrapper background={props.background} color={props.color}>
    <ChangePage to={props.previous}>Test</ChangePage>
    <Content>
      <React.Fragment>
        <ProjectTitle>{props.mainHeading}</ProjectTitle>
        <Keywords>{props.keywords}</Keywords>
        <Description>{props.description}</Description>
        {props.children}
      </React.Fragment>
    </Content>
    <ChangePage to={props.next}>Test</ChangePage>
  </Wrapper>
);

Header.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.func,
  color: PropTypes.func,
  previous: PropTypes.string,
  next: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  background: '',
  color: '',
  children: null,
  previous: '',
  next: '',
};

export default Header;
