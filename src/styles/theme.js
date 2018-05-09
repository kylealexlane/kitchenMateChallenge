const colors = {
  white: '#FCFCFC',
  black: '#171717',
  blue: '#1D9696',
  yellowGreen: '#B4EC51',
  slikPurple: '#C250CD',
  slikBlue: '#5178CB',
};

export default {
  dimensions: {
    subSection: {
      margin: '0 auto',
    },
    navbar: {
      height: '64px',
      margin: '0 auto',
    },
    button: {
      largeHeight: '48px',
      smallHeight: '32px',
    },
  },
  colors: {
    text: {
      black: colors.black /* base */,
      white: colors.white,
    },
    background: {
      white: colors.white,
      black: colors.black,
      blueGradient: `linear-gradient(to bottom right, ${colors.blue}, ${
        colors.yellowGreen
      })`,
      slikGradient: `linear-gradient(to bottom right, ${colors.slikPurple}, ${
        colors.slikBlue
      })`,
    },
  },
  padding: {
    four: '4px',
    eight: '8px',
    sixteen: '16px',
    twentyFour: '24px',
    thirtyTwo: '32px',
    fourtyEight: '48px',
    sixtyFour: '64px',
    eighty: '80px',
  },
  flex: {
    spaceBetween: 'display: flex; justify-content: space-between',
    spaceAround: 'display: flex; justify-content: space-around',
    center: 'display: flex; align-items: center; justify-content: center',
    flexStart:
      'display: flex; justify-content: flex-start; align-items: flex-start;',
    flexEnd: 'display: flex; justify-content: flex-end',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};
