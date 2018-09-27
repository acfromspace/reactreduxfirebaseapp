import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// Where all the reducers are combined

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
