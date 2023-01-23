const colors = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    iron: "#D1D5DA",
    mercury: "#E5E5E5",
    athensGray: "#F0F2F5",
    white: "#FFFFFF",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2688F7",
};

const breakpoints = {
    large: 991,
    mobile: 767,
};

const props = {
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadius: "4px",
}

export const theme = {
    elementColors: {
        background: colors.athensGray,
        tileBackground: colors.white,
        textImportant: colors.mineShaft,
        text: colors.slateGray,
        dot: colors.scienceBlue,
        portfolioHeader: colors.scienceBlue,
        button: colors.scienceBlue,
        line: colors.slateGray + 30,
        switchBackground: colors.iron,
        switch: colors.slateGray,
        icon: colors.mineShaft,
        iconHover: colors.scienceBlue,
        footerIcon: colors.mineShaft,
    },
    colors,
    breakpoints,
    props,
};

export const darkTheme = {
    elementColors: {
        background: colors.mineShaft,
        tileBackground: colors.slateGray + 40,
        textImportant: colors.white,
        text: colors.white,
        dot: colors.scienceBlue,
        portfolioHeader: colors.white,
        button: colors.scienceBlue,
        line: colors.slateGray + 30,
        switchBackground: colors.slateGray,
        switch: colors.white,
        icon: colors.scienceBlue,
        iconHover: colors.dodgerBlue,
        footerIcon: colors.mineShaft,
    },
    colors,
    breakpoints,
    props,
};