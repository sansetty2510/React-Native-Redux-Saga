import {put, takeLatest} from 'redux-saga/effects';
import {
	GET_GITHUB_USERS,
} from './constants';
import {
    getGithubUsersSuccess,
} from './actions';
import axios from 'axios';

const gitHubApi = axios.create({
    baseURL: 'https://api.github.com',
});

export function* fetchListFlow() {
    const gitHubUser = yield gitHubApi.get('/users')
        .then((response) => {
            return response.data;
        })
        .catch((_error) => {
            return [];
        });
    console.log('gitHubUser', gitHubUser)
    yield put(getGithubUsersSuccess(gitHubUser));
}
// All sagas to be loaded
export default [
    takeLatest(GET_GITHUB_USERS, fetchListFlow),
];
