const CHANGE_SERVICES = 'CHANGE_SERVICES';
const ADD_SERVICE = 'ADD_SERVICE';

const initialState = {
    services: [
        {name: 'Элемент 1', description: 'Описание элемента 1', checked: false},
        {name: 'Элемент 2', description: 'Описание элемента 2', checked: false},
        {name: 'Элемент 3', description: 'Описание элемента 3', checked: true},
        {name: 'Элемент 4', description: 'Описание элемента 4', checked: false},
    ]
};

const servicesReducer = (state = initialState, action) => {
debugger
    switch (action.type) {

        case CHANGE_SERVICES:
            return {};

        case ADD_SERVICE:
            debugger
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
};

export const addService = () => {
    debugger
    return {type: ADD_SERVICE};
};


export const onServiceSelect = (event, checked, id) => dispatch => {
    let e = event;
    let c = checked;
    let i = id;
    debugger
};


export default servicesReducer;