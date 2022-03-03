import axios from "axios";

const TOKEN = "";

export const publicRequest = axios.create({
    baseURL: process.env.React_App_BASE_URL,
});

export const userRequest = axios.create({
    baseURL: process.env.React_App_BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
}); 