import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
    name: "github",
    initialState: {
        reposStatus: "loading",
        repos: [],
        userStatus: "loading",
        user: [],
    },
    reducers: {
        fetchRepos: (state) => {
            state.reposStatus = "loading";
        },
        fetchReposSuccess: (state, { payload: repos }) => {
            state.reposStatus = "success";
            state.repos = repos;
        },
        fetchReposError: (state) => {
            state.reposStatus = "error";
        },
        fetchUser: (state) => {
            state.userStatus = "loading";
        },
        fetchUserSuccess: (state, { payload: user }) => {
            state.userStatus = "success";
            state.user = user;
        },
        fetchUserError: (state) => {
            state.userStatus = "error";
        },
    }
});

export const { fetchRepos,
    fetchReposSuccess,
    fetchReposError,
    fetchUser,
    fetchUserSuccess,
    fetchUserError, } = githubSlice.actions;

export const selectGithubState = state => state.github;

export const selectRepos = state => selectGithubState(state).repos;
export const selectReposStatus = state => selectGithubState(state).reposStatus;
export const selectReposLength = state => selectGithubState(state).repos.length;

export const selectUser = state => selectGithubState(state).user;
export const selectUserStatus = state => selectGithubState(state).userStatus;

export default githubSlice.reducer;

