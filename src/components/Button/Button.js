import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  border-radius: 5px;
  padding: ${props => props.theme.padding.eight}
    ${props => props.theme.padding.sixteen};
  letter-spacing: 0.5px;
  transition: 0.3s all;
  cursor: pointer;
`;

const StyledPrimaryButton = StyledButton.extend`
  color: ${props => props.theme.colors.mainText};
  background-color: ${props => props.theme.colors.mainBackground};
  border-color: ${props => props.theme.colors.mainText};
  :hover,
  :focus,
  :active {
    background-color: ${props => props.theme.colors.mainText};
    // border-color: ${props => props.theme.colors.mainText};
    color: ${props => props.theme.colors.mainBackground};
  }
`;

const StyledSecondaryButton = StyledButton.extend``;

const StyledDefaultButton = StyledButton.extend`
  color: ${props => props.theme.colors.text.black};
  background-color: ${props => props.theme.colors.background.white};
  :hover,
  :focus,
  :active {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const PrimaryButton = props => (
  <StyledPrimaryButton type="primary" size="large">
    {props.children}
  </StyledPrimaryButton>
);

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired
};

const SecondaryButton = props => (
  <StyledSecondaryButton size="large">{props.children}</StyledSecondaryButton>
);

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired
};

const DefaultButton = props => (
  <StyledDefaultButton size="large">{props.children}</StyledDefaultButton>
);

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired
};

export { PrimaryButton, SecondaryButton, DefaultButton };
