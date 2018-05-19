import React from "react";
import styled, { keyframes, withTheme } from "styled-components";
import PropTypes from "prop-types";

import { ContentWrapper } from "components/ContentWrapper";
import { Icon } from "antd/lib/index";
import { Link } from "react-router-dom";
// import IphoneSA from 'assets/IphoneSABlack.png';
import IphoneSA from 'assets/IphoneSA.png';

import { fadeInRightBig, fadeInLeftBig } from 'react-animations';

const width = 192;
const height = 395;
const multiplier = 1.7;

const Wrapper = styled.div`
  height: ${height*multiplier}px;
  width: ${width*multiplier}px;
  margin: 32px;
`;

const Phone = styled.img`
  width: 100%;
  height: 100%;
  // @media (max-width: ${props => props.theme.breakpoints.sm}) {
  //   width: 50%;
  //   margin-bottom: ${props => props.theme.padding.sixteen};
  // }
`;

const fadeInAnimationRight = keyframes`${fadeInRightBig}`;

const FadeInAnimationRight = styled.div`
  animation: 1s ${fadeInAnimationRight};
`;

const fadeInAnimationLeft = keyframes`${fadeInLeftBig}`;

const FadeInAnimationLeft = styled.div`
  animation: 1s ${fadeInAnimationLeft};
`;

const MobilePhone = props => (
  <Wrapper>
    {props.animation === 'left' ?
      <FadeInAnimationLeft>
        <Phone src={IphoneSA} />
      </FadeInAnimationLeft>
      :
      <FadeInAnimationRight>
        <Phone src={IphoneSA} />
      </FadeInAnimationRight>
    }

  </Wrapper>
);

// ExternalLinks.propTypes = {
//     mainHeading: PropTypes.string.isRequired,
//     keywords: PropTypes.string,
//     description: PropTypes.string,
//     background: PropTypes.func,
//     color: PropTypes.func,
//     children: PropTypes.node
// };
//
// ExternalLinks.defaultProps = {
//     keywords: "",
//     description: "",
//     background: () => {},
//     color: () => {},
//     children: null
// };

export default MobilePhone;