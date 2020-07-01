import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReudcer from "./FindUserReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    findUsersPage: usersReudcer,
    auth: authReducer
});

let store = createStore(reducers);

window.store=store;

export default store;