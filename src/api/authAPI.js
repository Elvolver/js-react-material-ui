import * as axios from "axios";

//const apiKey = 'e2d45044-b12d-4494-bd7b-259f01f5c0ce';
const baseUrl = 'http://172.16.34.172:8080/';

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    data: null,
    headers: {
        //   'API-KEY': apiKey
    }
});

export const authAPI = {
    signIn: (username, password) => instance
        .post(`auth/login`, {username, password}, {
            headers: {
                'Content-Type': 'application/json',
            }})
        .then(response => {
            console.log("ответ");
            console.log(response.data);
            return response.data
        })
        .catch(error => {
            console.log(error);
            return error;
        }),
};