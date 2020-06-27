const SEARCH_PLAYLIST_INITIAL_STATE = '';

export const searchPlaylistReducer = (state = SEARCH_PLAYLIST_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'SEARCH_MY_PLAYLIST':
            return action.payload;
        case 'SEARCH_ALL_PLAYLISTS':
            return action.payload;

        default:
            return state;
    }
}
