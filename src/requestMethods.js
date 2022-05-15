import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = 
//     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//      .accessToken || "";
//const TOKEN =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGViN2VjM2M2MmMzMmI5MDljZDliMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjYwNjU5NywiZXhwIjoxNjUyODY1Nzk3fQ.DcMGRMiWjO4XcLCeojmHG_sgajr4GnbyGG-i_QjoalQ'

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});