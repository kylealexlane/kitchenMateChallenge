const colors = {
  white: "#FCFCFC",
  black: "#171717",
  grey: "#333333",
  blue: "#1D9696",
  yellowGreen: "#B4EC51",
  cogniteBlue: "#749bad",
  cogniteGrey: "#778084",
  slikPurple: "#896b8c",
  slikBlue: "#6d788e",
  jobmineBlue: "#153154",
  jobmineGrey: "#778084",
  pathGreen: "#3a7048",
  pathGrey: "#778084",
  planItBlue: "#396770",
  planItGreen: "#39705a"
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
    }
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
    flexEnd: "display: flex; justify-content: flex-end"
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  }
};
