import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
    name: "github",
    initialState: {
        status: "loading",
        repos: [],
    },
    reducers: {
        fetchRepos: (state) => {
            state.status = "loading";
        },
        fetchReposSuccess: (state, { payload: repos }) => {
            state.status = "success";
            state.repos = repos;
        },
        fetchReposError: (state) => {
            state.status = "error";
        }
    }
});

export const { fetchRepos, fetchReposSuccess, fetchReposError } = githubSlice.actions;

export const selectRepos = state => state.github.repos;
export const selectStatus = state => state.github.status;
export const selectReposLength = state => state.github.repos.length;

export default githubSlice.reducer;

