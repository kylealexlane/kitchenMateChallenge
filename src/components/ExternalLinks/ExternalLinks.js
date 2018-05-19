import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

import { ContentWrapper } from "components/ContentWrapper";
import { Icon } from "antd/lib/index";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  ${props => props.theme.flex.flexRowEnd};
  // color: ${props => props.color || props.theme.colors.text.black};
  position: absolute;
  right: 0;
  top: 0;
  z-index: 200;
  background: ${props =>
    props.background || 'transparent'};
  // @media (max-width: ${props => props.theme.breakpoints.md}) {
  //   padding: ${props => props.theme.padding.twentyFour} 0 0;
  // }
`;

const CircleIconButton = styled.a`
  ${props => props.theme.flex.center};
  background: ${props => props.theme.colors.mainBackground };
  border-radius: 100%;
  // border: 1px solid ${props => props.theme.colors.mainText };
  // border-color: ${props => props.theme.colors.mainText };
  color: ${props => props.theme.colors.mainText };
  width: 32px;
  height: 32px;
  z-index: 4;
  :hover {
    background: ${props => props.theme.colors.mainText};
    color: ${props => props.theme.colors.mainBackground};
    -webkit-transition: all 0.8s ease;
    -ms-transition: all 0.8s ease;
    transition: all 0.8s ease;
  }
`;

const Buttons = styled.div`
  margin-top: ${props => props.theme.padding.thirtyTwo};
  ${props => props.theme.flex.flexRowEnd};
`;

const SocialButtonWrapper = CircleIconButton.extend`
  border: none;
  &:hover,
  &:active,
  &:focus {
    outline: none;
    text-decoration: none;
  }
  margin: ${props => props.theme.padding.eight};
`;

const SocialButtonIcon = styled(Icon)`
  align-self: center;
  height: initial;
  // color: ${props => props.theme.colors.text.white};
`;

//
// const Content = styled(ContentWrapper)`
//   ${props => props.theme.flex.spaceBetween};
//   flex-direction: row;
// `;
//
// const Title = styled.h2`
//   padding-bottom: ${props => props.theme.padding.eight};
// `;
//
// const Keywords = styled.h3`
//   padding-bottom: ${props => props.theme.padding.twentyFour};
// `;
//
// const Description = styled.h4``;

const SocialButton = props => (
    <SocialButtonWrapper color={props.color} href={props.href} target="_new">
        <SocialButtonIcon type={props.icon} style={{ fontSize: 22 }} />
    </SocialButtonWrapper>
);

const ExternalLinks = props => (
    <Wrapper background={props.background} color={props.color}>
        <Buttons>
            <Link to="" >
              <SocialButton
                // href="https://www.facebook.com/kyle97"
                // target="_new"
                // color={'blue'}
                icon="home"
              />
            </Link>
            <SocialButton
                href="https://www.facebook.com/kyle97"
                target="_new"
                // color={'blue'}
                icon="facebook"
            />
            <SocialButton
                href="https://www.instagram.com/kyleeelane/"
                target="_new"
                // color={'blue'}
                icon="instagram"
            />
            <SocialButton
                href="https://www.linkedin.com/in/kylealexlane/"
                target="_new"
                // color={'blue'}
                icon="linkedin"
            />
            <SocialButton
                href="https://github.com/kylealexlane"
                target="_new"
                // color={'blue'}
                icon="github"
            />
            <SocialButton
                href="mailto:kalane@edu.uwaterloo.ca?Subject=Hello"
                target="_new"
                // color={'blue'}
                icon="mail"
            />
            {/*<SocialButton*/}
                {/*onClick={() => {*/}
                    {/*window.open(Resume);*/}
                {/*}}*/}
                {/*target="_new"*/}
                {/*color={this.props.theme.colors.background.blueGradient}*/}
                {/*icon="file-text"*/}
            {/*/>*/}
        </Buttons>
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

export default ExternalLinks;