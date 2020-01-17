import {MessageAPI} from "../api/api";

const SET_MESSAGES = 'SET_MESSAGES';
const ADD_MESSAGE = 'ADD_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

const initialState = {
    messages: [
        {id: 0, text: 'Сообщение 1'},
        {id: 1, text: 'Сообщение 2'},
        {id: 2, text: 'Сообщение 3'},
        {id: 3, text: 'Сообщение 4'},
    ]
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {...state, messages: action.messages};
        case ADD_MESSAGE:
            return {
                ...state, messages: [
                    ...state.messages, {
                        id: action.id, text: action.text
                    }
                ]
            };
        case DELETE_MESSAGE:
            return  {
                ...state, messages: state.messages.filter(message => {
                        if (message.id !== action.id) {
                            return message;
                        }
                    }
                )
            }
        default:
            return state;
    }
};

export const getMessages = () => (dispatch) => {
    MessageAPI.getMessages()
        .then(response => {
            dispatch(setMessages(response))
        })
        .catch(error => {
            console.log(error)
        });
};

export const addMessage = (text = 'NoText') => (dispatch) => {
    debugger
    MessageAPI.addMessage(text)
        .then(response => {
            let message = {
                id: response.id,
                text: response.text
            };
            dispatch(addMessageToState(message))
        });
    return {type: ADD_MESSAGE, text};
};

export const deleteMessage = (id) => (dispatch) => {
    debugger
    MessageAPI.deleteMessage(id)
        .then(response => {
             dispatch(deleteMessageFromState(id))
            }
        );
    return {type: DELETE_MESSAGE, id: id};
};

export const addMessageToState = (message) => {
    return {type: ADD_MESSAGE, message};
};

export const deleteMessageFromState = (id) => {
    return {type: DELETE_MESSAGE, id};
};

export const setMessages = (messages) => {
    return {type: SET_MESSAGES, messages};
};

export default messageReducer;