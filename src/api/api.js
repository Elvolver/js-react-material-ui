import * as axios from "axios";

//const apiKey = 'e2d45044-b12d-4494-bd7b-259f01f5c0ce';
const baseUrl = 'http://localhost:8080/';

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    data: null,
    headers: {
     //   'API-KEY': apiKey
    }
});
export const MessageAPI = {
    getMessages: () => instance
        .get(`message`)
        .then(response => {
            console.log("ответ")
            console.log(response.data)
        return     response.data

        })
        .catch(error => {
            console.log(error);
            return error;
        }),
    addMessage: (text) => {
        return instance
            .post(`message`, {text}, {
                headers: {
                    'Content-Type': 'application/json',
                }})

        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error
        })},
    deleteMessage: (id) => {
        debugger
        return instance
            .delete(`message/${id}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })}
};
