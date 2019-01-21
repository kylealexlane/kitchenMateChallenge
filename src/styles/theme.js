const colors = {
  white: "#FCFCFC",
  black: "#171717",
  grey: "#333333",

  // mainBackground: "#FCFCFC",
  // secondaryBackground: "#FCFCFC",
  //
  // mainText: "#171717",
  // secondaryText: "#333333",
  //
  // mainAccent: "#1D9696",
  // secondaryAccent: "#B4EC51",
  //
  mainBackground: "#202124",
  secondaryBackground: "#FCFCFC",

  mainText: "#fafafa",
  secondaryText: "#5f6368",

  mainAccent: "#FF6B00",
  secondaryAccent: "#B4EC51",
};

export default {
  dimensions: {
    subSection: {
      margin: "0 auto"
    },
    portfolioHeader: {
      height: "550px"
    },
    navbar: {
      height: "64px",
      margin: "0 auto"
    },
    button: {
      largeHeight: "48px",
      smallHeight: "32px"
    },
    maxWidth: "920px"
  },
  colors: {
    primary: colors.blue,
    primaryHover: colors.yellowGreen,
    text: {
      black: colors.black /* base */,
      white: colors.white
    },
    background: {
      white: colors.white,
      black: colors.black,
      grey: colors.grey,
      blue: colors.blue,
      blueGradient: `linear-gradient(to bottom right, ${colors.blue}, ${
        colors.yellowGreen
      })`,
      cogniteGradient: `linear-gradient(to bottom right, ${
        colors.cogniteBlue
      }, ${colors.cogniteGrey})`,
      slikGradient: `linear-gradient(to bottom right, ${colors.slikPurple}, ${
        colors.slikBlue
      })`,
      jobmineGradient: `linear-gradient(to bottom right, ${
        colors.jobmineBlue
      }, ${colors.jobmineGrey})`,
      pathGradient: `linear-gradient(to bottom right, ${colors.pathGreen}, ${
        colors.pathGrey
      })`,
      planItGradient: `linear-gradient(to bottom right, ${colors.planItBlue}, ${
        colors.planItGreen
      })`
    },
    mainBackground: colors.mainBackground,
    secondaryBackground: colors.secondaryBackground,

    mainText: colors.mainText,
    secondaryText: colors.secondaryText,

    mainAccent: colors.mainAccent,
    secondaryAccent: colors.secondaryAccent,
  },
  padding: {
    four: "4px",
    eight: "8px",
    sixteen: "16px",
    twentyFour: "24px",
    thirtyTwo: "32px",
    fourtyEight: "48px",
    sixtyFour: "64px",
    eighty: "80px",
    hundredTwenty: "120px"
  },
  flex: {
    spaceBetween: "display: flex; justify-content: space-between",
    spaceAround: "display: flex; justify-content: space-around",
    center: "display: flex; align-items: center; justify-content: center",
    flexStart:
      "display: flex; justify-content: flex-start; align-items: flex-start;",
    flexEnd: "display: flex; justify-content: flex-end",
    flexRowEnd: "display: flex; flex-direction: row; justify-content: flex-end; align-items: center;",
    flexRowBetween: "display: flex; flex-direction: row; justify-content: space-between; align-items: flex-start; flex-wrap: wrap;",
    flexColumnCenter: "display: flex; flex: 1; flex-direction: column; justify-content: center, align-items: center;",
    flexRowJustifyStart: "display: flex; flex-direction: row; justify-content: flex-start; align-items: center;",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  },
};
