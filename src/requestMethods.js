import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = 
//     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//      .accessToken || "";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGViN2VjM2M2MmMzMmI5MDljZDliMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDc0NzUxOCwiZXhwIjoxNjUxMDA2NzE4fQ.11KwEFSCof6o_ZNh5aKZnF1tOBi487M7RUALrmo2LGM";


export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});