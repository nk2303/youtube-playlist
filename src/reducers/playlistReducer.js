const PLAYLIST_INITIAL_STATE = [];

export const playlistReducer = (state = PLAYLIST_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'CREATE_PLAYLIST':
            return [...state, action.payload.playlist];

        case 'GET_MY_PLAYLISTS':
            console.log(action.payload);
            return action.payload.map(item => item);

        case 'DELETE_PLAYLIST':
            return state.filter((p) => p.id !== action.playlist_id)

        default:
            return state;
    }
}