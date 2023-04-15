import { combineReducers } from "redux";
import accountReducer from "./reducers/accoutReducer";
import userReducer from "./reducers/userReducer";
const reducer = combineReducers({
    account: accountReducer,
    user: userReducer,
})
export default reducer;