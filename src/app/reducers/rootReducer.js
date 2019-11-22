import { combineReducers } from 'redux';
import test from '../../features/testarea/test';

const rootReducer = combineReducers({
    test: test
});

export default rootReducer;