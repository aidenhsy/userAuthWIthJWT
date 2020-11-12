import { combineReducers } from "redux";
import {
  userLoginReducer,
  userRegisterReducer,
  userProfileReducer,
  userProfileUpdateReducer,
} from "./userReducers";

const allReducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userProfileUpdate: userProfileUpdateReducer,
});

export default allReducers;
