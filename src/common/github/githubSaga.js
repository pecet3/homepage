import { delay, call, put, takeLatest } from "redux-saga/effects"
import { getRepos } from "./getRepos";
import { getUser } from "./getUser";
import {
    fetchRepos,
    fetchReposError,
    fetchReposSuccess,
    fetchUserError,
    fetchUserSuccess,
    fetchUser,
} from "./githubSlice";

function* fetchReposHandler() {
    try {
        yield delay(1000);
        const repos = yield call(getRepos);
        yield put(fetchReposSuccess(repos));

    } catch (error) {
        yield put(fetchReposError(error));
        yield call(console.error(error));
    }

};

function* fetchUserHandler() {
    try {
        yield delay(1100);
        const user = yield call(getUser);
        yield put(fetchUserSuccess(user));
    } catch (error) {
        yield put(fetchUserError(error));
        yield call(console.error(error));
    }
};

export function* githubSaga() {
    yield takeLatest(fetchRepos.type, fetchReposHandler);
    yield takeLatest(fetchUser.type, fetchUserHandler);
};
