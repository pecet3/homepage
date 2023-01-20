const colors = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    iron: "#D1D5DA",
    mercury: "#E5E5E5",
    athensGray: "#F0F2F5",
    white: "#FFFFFF",
    scienceBlue: "#0366D6",
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
        tileBackground: colors.white,
        textImportant: colors.mineShaft,
        text: colors.slateGray,
        dot: colors.scienceBlue,
        portfolioHeader: colors.scienceBlue,
        button: colors.scienceBlue,
        line: colors.slateGray + 30,
        switchBackground: colors.iron,
        switch: colors.slateGray,
        icon: colors.scienceBlue,
        footerIcon: colors.mineShaft,
    },
    colors,
    breakpoints,
    props,
};