import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import servicesReducer from "./ServicesReducer";
import messageReducer from "./MessageReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    services: servicesReducer,
    messages: messageReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;