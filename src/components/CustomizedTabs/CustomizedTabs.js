import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const MarginTopDiv = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 100px;
  }
`;
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
},
  tabsRoot: {
    borderBottom: '0px solid transparent',
  },
  tabsIndicator: {
    backgroundColor: '#fafafa',
  },
  tabRoot: {
    zIndex: 1000,
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 2,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#fafafa',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#fafafa',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#fafafa',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class CustomizedTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.callback ? this.props.callback(event, value) : null;
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <MarginTopDiv>
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Portfolio"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="DeepStats"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Sprout"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab 3"
            />
          </Tabs>
        </div>
      </MarginTopDiv>
    );
  }
}

CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTabs);