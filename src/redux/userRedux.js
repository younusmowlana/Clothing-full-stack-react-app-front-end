import { createSlice } from "@reduxjs/toolkit";
const authUser = localStorage.getItem("currentUser")
const user = JSON.parse(authUser)
const userSlice = createSlice({
  
  name: "user",
  initialState: {
    currentUser: null,
    user: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },

    //Register
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.user.push(action.payload);
      state.currentUser = action.payload;
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

  },
});

export const { loginStart, loginSuccess, loginFailure, addUserStart, addUserSuccess,  addUserFailure} = userSlice.actions;
export default userSlice.reducer;