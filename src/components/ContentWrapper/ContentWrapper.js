import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.div`
  margin: 0 ${props => props.theme.padding.thirtyTwo};
  max-width: 992px;
  width: 100%;
`;

const ContentWrapper = props => <Content>{props.children}</Content>;

ContentWrapper.propTypes = {
  children: PropTypes.node,
};

ContentWrapper.defaultProps = {
  children: null,
};

export default ContentWrapper;
