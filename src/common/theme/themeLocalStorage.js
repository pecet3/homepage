import { initializeUseSelector } from "react-redux/es/hooks/useSelector";

const localStorageKey = "darkTheme";

export const saveThemeInLocalStorage = (isDarkTheme) => {
    localStorage.setItem(localStorageKey, isDarkTheme);
};

export const getThemeLocalStorage = (init) =>
    JSON.parse(localStorage.getItem(localStorageKey)) || init;
