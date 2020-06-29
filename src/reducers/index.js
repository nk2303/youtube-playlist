import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { userReducer } from "./userReducer";
import { playlistReducer } from "./playlistReducer";
import { videoReducer } from "./videoReducer";
import { searchPlaylistReducer } from "./searchPlaylistReducer";
import { allPlaylistsReducer } from "./allPlaylistsReducer";
import { followedPlaylistsReducer } from "./followedPlaylistsReducer"


export default combineReducers({
    videos: searchReducer,
    userContext: userReducer,
    myPlaylists: playlistReducer,
    targetVideo: videoReducer,
    searchPlaylist: searchPlaylistReducer,
    allPlaylists: allPlaylistsReducer,
    myFollowedPlaylists: followedPlaylistsReducer
});