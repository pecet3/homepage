import { all } from "redux-saga/effects";
import { githubSaga } from "./common/github/githubSaga";
import { themeSaga } from "./common/theme/themeSaga";

export default function* rootSaga() {
    yield all([
        themeSaga(),
        githubSaga(),
    ])
};