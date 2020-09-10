export const types = {
    SET_BASIC_INFO: 'SET_BASIC_INFO',
    SET_PROF_INFO: 'SET_PROF_INFO',
}
export default {
    setBasicInfo: payload => ({ type: types.SET_BASIC_INFO, payload }),
    setProfInfo: payload => ({ type: types.SET_PROF_INFO, payload }),
}