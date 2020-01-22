import {authAPI} from "../api/authAPI";
import appReducer, {loadingOff, loadingOn} from "./AppReducer";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

const initialState = {
    authData: {
        username: null,
        token: null
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            loadingOff()
            return {...state, authData: {...state.authData, username: action.username, token: action.token}};
        default:
            return state;
    }
};


export const signIn = (username, password) => (dispatch) => {
    authAPI.signIn(username, password)
        .then(response => {
            dispatch(setAuthData(response.username, response.token))
            localStorage.setItem("token", response.token);
            localStorage.setItem("username", response.username);
        })
        .catch(error => {
            console.log(error)
        });
};

export const setAuthData = (username, token) => {
    return {type: SET_AUTH_DATA, username, token};
};

export default authReducer;