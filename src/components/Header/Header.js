import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ContentWrapper } from "components/ContentWrapper";

const Wrapper = styled.header`
  ${props => props.theme.flex.center};
  align-items: center;
  color: ${props => props.color || props.theme.colors.text.black};
  background: ${props =>
    props.background || props.theme.colors.background.white};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: ${props => props.theme.padding.hundredTwenty} 0
    ${props => props.theme.padding.twentyFour};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.padding.twentyFour} 0 0;
  }
`;

const Content = styled(ContentWrapper)`
  ${props => props.theme.flex.spaceBetween};
  flex-direction: row;
`;

const Title = styled.h2`
  padding-bottom: ${props => props.theme.padding.eight};
`;

const Keywords = styled.h3`
  padding-bottom: ${props => props.theme.padding.twentyFour};
`;

const Description = styled.h4``;

const Header = props => (
  <Wrapper background={props.background} color={props.color}>
    <Content>
      <React.Fragment>
        <Title>{props.mainHeading}</Title>
        {props.keywords && <Keywords>{props.keywords}</Keywords>}
        {props.description && <Description>{props.description}</Description>}
        {props.children}
      </React.Fragment>
    </Content>
  </Wrapper>
);

Header.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  description: PropTypes.string,
  background: PropTypes.func,
  color: PropTypes.func,
  children: PropTypes.node
};

Header.defaultProps = {
  keywords: "",
  description: "",
  background: () => {},
  color: () => {},
  children: null
};

export default Header;
