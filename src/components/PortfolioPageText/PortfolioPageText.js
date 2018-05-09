import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p``;

const SubHeading = styled.h4`
  margin-bottom: ${props => props.theme.padding.eight};
`;

const Heading = styled.h3`
  margin-top: ${props => props.theme.padding.thirtyTwo};
  margin-bottom: ${props => props.theme.padding.sixteen};
`;

const MainText = props => <Text>{props.children}</Text>;

MainText.propTypes = {
  children: PropTypes.node.isRequired,
};

const MainTextSubHeading = props => <SubHeading>{props.children}</SubHeading>;

MainTextSubHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

const MainTextHeading = props => <Heading>{props.children}</Heading>;

MainTextHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MainText, MainTextSubHeading, MainTextHeading };
