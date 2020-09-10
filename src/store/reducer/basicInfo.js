import { types } from '../../actions';

const basicInfo = (state = {}, action) => {
    switch(action.type) {
        case types.SET_BASIC_INFO: 
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default basicInfo;