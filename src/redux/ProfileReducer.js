import {ProfileAPI} from "../api/api";

const SET_PROFILE = 'SET_PROFILE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
};

export const getProfile = () => (dispatch) => {
    ProfileAPI.getProfile()
        .then(response => {
            debugger
            dispatch(setProfile(response))
        })
        .catch(error => {
            debugger
            console.log(error)
        });
};

export const setProfile = (profile) => {
    return {type: SET_PROFILE, profile};
};

export default profileReducer;