import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import servicesReducer from "./ServicesReducer";
import numPizzasReducer from "./numPizzasReducer";


let reducers = combineReducers({
    services: servicesReducer,
    form: formReducer,
    numPizzas: numPizzasReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;