const PLAYLIST_INITIAL_STATE = [];

export const playlistReducer = (state = PLAYLIST_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'CREATE_PLAYLIST':
            return [...state, action.payload.playlist];

        case 'GET_MY_PLAYLISTS':
            return action.payload.map(item => item);

        default:
            return state;
    }
}