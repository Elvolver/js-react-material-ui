const SET_LOADING = 'SET_LOADING';

const initialState = {
    isLoading: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            alert(action.isLoading)
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
};

export const loadingOn = () => {
    return {type: SET_LOADING, isLoading: true};
};

export const loadingOff = () => {
    return {type: SET_LOADING, isLoading: false};
};

export default appReducer;