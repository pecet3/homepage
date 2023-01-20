import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./common/theme/themeSlice";
const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;