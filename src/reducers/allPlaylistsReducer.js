const ALL_PLAYLISTS_INITIAL_STATE  = [];

export const allPlaylistsReducer = (state = ALL_PLAYLISTS_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'GET_ALL_PLAYLISTS':
            return action.payload.map(item => item);

        default:
            return state;
    }
}
