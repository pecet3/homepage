import { createSlice } from "@reduxjs/toolkit";
import { getThemeLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkTheme: getThemeLocalStorage(false),
    },
    reducers: {
        toggleIsDarkTheme: state => {
            state.isDarkTheme = !state.isDarkTheme
        },
    }
});

export const {
    toggleIsDarkTheme,
} = themeSlice.actions;

export const selectIsDarkTheme = state => state.theme.isDarkTheme;

export default themeSlice.reducer;