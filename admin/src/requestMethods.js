import axios from "axios";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: process.env.React_App_BASE_URL,
});

export const userRequest = axios.create({
    baseURL: process.env.React_App_BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
}); 