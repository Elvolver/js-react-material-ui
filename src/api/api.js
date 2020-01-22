import * as axios from "axios";

//const apiKey = 'e2d45044-b12d-4494-bd7b-259f01f5c0ce';
const baseUrl = 'http://172.16.34.172:8080/';

let token = localStorage.getItem("token");

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    data: null,
    headers: {
        "Authorization": "Bearer_" + token,
        "Content-Type": "application/json"
    }
});

export const MessageAPI = {
    getMessages: () => instance
        .get(`message`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        }),
    addMessage: (text) => {
        return instance
            .post(`message`, {text})
            .then(response => response.data)
            .catch(error => {
                throw error
            })
    },
    deleteMessage: (id) => {
        return instance
            .delete(`message/${id}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    }
};

export const ProfileAPI = {
    getProfile: () => instance
        .get(`/`)
        .then(response => {
            console.log("ответ")
            console.log(response.data)
            return response.data

        })
        .catch(error => {
            console.log(error);
            return error;
        }),
}
