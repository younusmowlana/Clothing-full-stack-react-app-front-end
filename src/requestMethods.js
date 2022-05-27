import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = 
//     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//      .accessToken || "";
//const TOKEN =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDYwMTZhNjE2YWQ2YzkxOTNlY2FlNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTM2NjIxODIsImV4cCI6MTY1MzkyMTM4Mn0.LZZA3f1fmcCy8QEd5bMyieEp8y00nSLgHD2j_Z3ePF4";


export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});