import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  color: ${props => props.theme.colors.text.dark};
  background: transparent;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: inherit;
  z-index: 1000;
  height: 100px;
`;

const NavBarContainer = styled.div`
  ${props => props.theme.flex.spaceBetween};
  ${props => props.theme.dimensions.navbar};
  align-items: center;
  width: initial;
  margin: 0 auto;
  padding: 0 ${props => props.theme.padding.twentyFour};
`;

const LogoContainer = styled.p`
  ${props => props.theme.flex.center};
  font-weight: 500;
  margin-top: ${props => props.theme.padding.fourtyEight};
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: ${props => props.theme.padding.eighty};
    margin-left: ${props => props.theme.padding.thirtyTwo};
  }
`;

const HamburgerMenuWrapper = styled.div`
  ${props => props.theme.flex.center};
  background: ${props =>
    props.background || props.theme.colors.background.blueGradient};
  ${props => props.theme.flex.center};
  margin-top: ${props => props.theme.padding.fourtyEight};
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: ${props => props.theme.padding.eighty};
    margin-right: ${props => props.theme.padding.thirtyTwo};
    display: none;
  }
  border-radius: 100%;
  width: 64px;
  height: 64px;
`;

const HamburgerMenuIcon = styled.div`
  align-self: center;
  height: initial;
  cursor: pointer;
`;

const HamburgerMenu = styled.p`
  ${props => props.theme.flex.center};
  background: ${props => props.theme.colors.background.white};
  flex-direction: column;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  transition: all 0.25s;
`;

const HamburgerLink = styled(Link)`
  color: ${props => props.theme.colors.text.dark};
  margin: ${props => props.theme.padding.sixteen} 0;
`;

const NavBarLinks = styled.div`
  ${props => props.theme.flex.center};
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const NavBarLink = styled(Link)`
  color: ${props => props.theme.colors.text.black};
  margin-left: ${props => props.theme.padding.sixteen};
`;

// make above h4

class NavBar extends React.Component {
  state = {
    isMenuOpen: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        // lmao fix lint later but it works
        isMenuOpen: false,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  handleClick = () => {
    if (!this.state.isMenuOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  handleOutsideClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.setState({
      isMenuOpen: false,
    });
  };

  mapLinks = component => {
    const Links = [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'About',
        link: '/about',
      },
      {
        title: 'Portfolio',
        link: '/portfolio',
      },
    ];
    const Component = component;

    return Links.map(link => (
      <Component exact to={link.link} key={link.link}>
        {link.title}
      </Component>
    ));
  };

  render() {
    return (
      <Wrapper>
        <NavBarContainer>
          <LogoContainer>
            <Link to="/">jw.</Link>
          </LogoContainer>
          <span
            ref={node => {
              this.node = node;
            }}
          >
            <HamburgerMenuWrapper background={this.props.background}>
              <HamburgerMenuIcon onClick={this.handleClick}>
                menu
              </HamburgerMenuIcon>
            </HamburgerMenuWrapper>
            <NavBarLinks>{this.mapLinks(NavBarLink)}</NavBarLinks>
            {this.state.isMenuOpen && (
              <React.Fragment>
                <HamburgerMenu>{this.mapLinks(HamburgerLink)}</HamburgerMenu>
                <HamburgerMenuWrapper>
                  <HamburgerMenuIcon onClick={this.handleClick}>
                    close
                  </HamburgerMenuIcon>
                </HamburgerMenuWrapper>
              </React.Fragment>
            )}
          </span>
        </NavBarContainer>
      </Wrapper>
    );
  }
}

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  background: PropTypes.func,
};

NavBar.defaultProps = {
  background: null,
};

export default withRouter(NavBar);
