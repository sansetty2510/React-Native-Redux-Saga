import {
	GET_GITHUB_USERS, GET_GITHUB_USERS_SUCCESS,
} from './constants';

const initialState = {
	userList: []
};

export default function(state = initialState, action={}) {
	switch (action.type) {
		case GET_GITHUB_USERS : 
			return {
				...state,
				userList : []
			}
		case GET_GITHUB_USERS_SUCCESS:
		debugger
			return {
				...state,
				userList: action.payload.users,
			};
		default:
			return state;
	}
}
