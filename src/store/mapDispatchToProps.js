import actions from '../actions';

export const mapSetBasicInfo = (dispatch) => ({
    setBasicInfo: data => dispatch(actions.setBasicInfo(data)),
});

export const mapSetProfInfo = (dispatch) => ({
    setProfInfo: data => dispatch(actions.setProfInfo(data)),
});
