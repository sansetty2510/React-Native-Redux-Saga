import {all} from 'redux-saga/effects';

import HomeContainerSaga from '../pages/Home/sagas';

export const rootSaga =  function* rootSagas() {
    yield all([
    ...HomeContainerSaga,
    ]);
};

