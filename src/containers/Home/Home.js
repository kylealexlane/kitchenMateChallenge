import React from 'react';

import { Home } from 'components/Home';

import Background from 'assets/headerBackground.jpg';

const HomeContainer = () => (
  <React.Fragment>
    <Home
      background={Background}
      mainHeading="Hi, I'm Jessie"
      subHeading="Welcome to my website!"
    />
  </React.Fragment>
);

export default HomeContainer;
