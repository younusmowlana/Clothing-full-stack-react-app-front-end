import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";


// import userReducer from "./userRedux";
//import {composeWithDevTools} from '@redux-devtools/extension'

export default configureStore({
  
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
})