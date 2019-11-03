const ON_SERVICE_SELECT = 'ON_SERVICE_SELECT';
const ADD_SERVICE = 'ADD_SERVICE';
const DELETE_CHECKED_SERVICES = 'DELETE_CHECKED_SERVICES';

const initialState = {
    services: [
        {id: 1, name: 'Элемент 1', description: 'Описание элемента 1', checked: false},
        {id: 2, name: 'Элемент 2', description: 'Описание элемента 2', checked: false},
        {id: 3, name: 'Элемент 3', description: 'Описание элемента 3', checked: true},
        {id: 4, name: 'Элемент 4', description: 'Описание элемента 4', checked: false},
    ]
};

const servicesReducer = (state = initialState, action) => {
        switch (action.type) {
            case ON_SERVICE_SELECT:
                return {
                    ...state, services: [...state.services.map(service => service.id === action.id ? {...service, checked: action.checked} : service)]
                };

            case DELETE_CHECKED_SERVICES:
                return {
                    ...state, services: [...state.services.filter(service => !service.checked)]
                };
            case
            ADD_SERVICE:
                return {
                    ...state, services: [
                        ...state.services, {
                            name: 'Элемент 5', description: 'Описание элемента 5', checked: false
                        }
                    ]
                };
            default:
                return state;
        }
    }
;

export const addService = () => {
    return {type: ADD_SERVICE};
};

export const onServiceSelect = (e, checked, id) => {
    return {type: ON_SERVICE_SELECT, e, checked, id};
};

export const deleteCheckedServices = () => {
    return {type: DELETE_CHECKED_SERVICES}
};

export default servicesReducer;