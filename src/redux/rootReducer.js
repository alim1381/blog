import { combineReducers } from "redux";
import loginRaducer from "./login/loginReducer";

const rootReducer = combineReducers({
    loginState : loginRaducer
})

export default rootReducer;