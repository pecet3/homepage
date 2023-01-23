import { delay, call, put, takeLatest } from "redux-saga/effects"
import { getRepos } from "./getRepos";
import { fetchRepos, fetchReposError, fetchReposSuccess } from "./githubSlice";

function* fetchReposHandler() {
    try {
        yield delay(1000);
        const repos = yield call(getRepos);
        yield put(fetchReposSuccess(repos));

    } catch (error) {
        yield put(fetchReposError);
        yield call(console.error(error));
    }

};

export function* githubSaga() {
    yield takeLatest(fetchRepos.type, fetchReposHandler);
}