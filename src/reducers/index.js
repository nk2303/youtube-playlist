import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { modalReducer } from "./modalReducer";

export default combineReducers({
    videos: searchReducer,
    modalInfo: modalReducer,
})