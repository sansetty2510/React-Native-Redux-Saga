import {
	GET_GITHUB_USERS, 
	GET_GITHUB_USERS_SUCCESS
} from './constants';

export const getGithubUsers = () => {
	return {
		type: GET_GITHUB_USERS,
	};
}
export const getGithubUsersSuccess = (users) => {
	return {
		type: GET_GITHUB_USERS_SUCCESS,
		payload : {
			users
		}
	};
}
