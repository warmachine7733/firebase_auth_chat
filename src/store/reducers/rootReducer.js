import { combineReducers } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const appReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
// const appReducer = (state, action) => {
//   return rootReducer(state, action)
// }
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
