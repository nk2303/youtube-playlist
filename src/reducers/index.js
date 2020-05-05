import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { userReducer } from "./userReducer";
import { playlistReducer } from "./playlistReducer";
import { videoReducer } from "./videoReducer";

export default combineReducers({
    videos: searchReducer,
    userContext: userReducer,
    myPlaylists: playlistReducer,
    targetVideo: videoReducer
});