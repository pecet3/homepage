import { takeEvery, call, select } from "redux-saga/effects";
import { selectIsDarkTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
    const isDarkTheme = yield select(selectIsDarkTheme);
    yield call(saveThemeInLocalStorage, isDarkTheme);
};

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
};