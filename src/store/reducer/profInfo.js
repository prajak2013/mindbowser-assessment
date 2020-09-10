import { types } from '../../actions';

const profInfo = (state = { reactRating: '50' }, action) => {
    switch(action.type) {
        case types.SET_PROF_INFO: 
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default profInfo;