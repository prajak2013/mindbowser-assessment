import { combineReducers } from 'redux';
import basicInfo from './basicInfo';
import profInfo from './profInfo';

const rootReducer = combineReducers({
    basicInfo,
    profInfo,
});

export default rootReducer;
