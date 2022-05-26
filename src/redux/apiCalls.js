import { loginFailure, loginStart, loginSuccess, addUserStart, addUserSuccess, addUserFailure} from "./userRedux";
import { publicRequest,userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("currentUser",JSON.stringify(res.data))
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const addUser = async (dispatch, user) => {
  dispatch(addUserStart());
  try {
    console.log("user")
    console.log(user)
    const res = await userRequest.post(`/user`, user);
    dispatch(addUserSuccess(res.data));
    localStorage.setItem("currentUser",JSON.stringify(res.data))
  } catch (err) {
    dispatch(addUserFailure());
  }
};
