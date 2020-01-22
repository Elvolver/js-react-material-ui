import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import servicesReducer from "./ServicesReducer";
import messageReducer from "./MessageReducer";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./AuthReduser";
import appReducer from "./AppReducer";


let reducers = combineReducers({
    services: servicesReducer,
    messages: messageReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;