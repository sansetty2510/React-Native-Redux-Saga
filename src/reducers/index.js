import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import homeReducer from '../pages/Home/reducer';

export default combineReducers({
	form: formReducer,
	homeReducer,
});
