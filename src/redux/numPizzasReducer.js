const ON_SERVICE_SELECT = 'ON_SERVICE_SELECT';
const ADD_SERVICE = 'ADD_SERVICE';
const DELETE_CHECKED_SERVICES = 'DELETE_CHECKED_SERVICES';
const DELETE_ALL_SERVICES = 'DELETE_ALL_SERVICES';
const SELECT_ALL_SERVICES = 'SELECT_ALL_SERVICES';

const initialState = {
    services: [
        {id: 0, name: 'Элемент 1', description: 'Описание элемента 1', checked: false},
        {id: 1, name: 'Элемент 2', description: 'Описание элемента 2', checked: false},
        {id: 2, name: 'Элемент 3', description: 'Описание элемента 3', checked: true},
        {id: 3, name: 'Элемент 4', description: 'Описание элемента 4', checked: false},
    ],
    counter: 5
};

const numPizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_SERVICE_SELECT:
            return {
                ...state,
                services: [...state.services.map(service => service.id === action.id ? {
                    ...service,
                    checked: action.checked
                } : service)]
            };
        case SELECT_ALL_SERVICES:
            return {
                ...state, services: [...state.services.map(service => ({...service, checked: true}))]
            };
        case DELETE_CHECKED_SERVICES:
            return {
                ...state, services: [...state.services.filter(service => !service.checked)]
            };
        case DELETE_ALL_SERVICES:
            return {
                ...state, services: []
            };
        case
        ADD_SERVICE:
            return {
                ...state, services: [
                    ...state.services, {
                        id: state.counter, name: action.name, description: action.description, checked: false
                    }
                ], counter: state.counter + 1
            };
        default:
            return state;
    }
};

export const addService = (name = 'NoName', description = 'NoDescription') => {
    return {type: ADD_SERVICE, name, description};
};

export const onServiceSelect = (e, checked, id) => {
    return {type: ON_SERVICE_SELECT, e, checked, id};
};

export const deleteCheckedServices = () => {
    return {type: DELETE_CHECKED_SERVICES}
};

export const deleteAllServices = () => {
    return {type: DELETE_ALL_SERVICES}
};

export const selectAllServices = () => {
    return {type: SELECT_ALL_SERVICES}
};

export default numPizzasReducer;