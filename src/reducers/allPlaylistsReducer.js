const ALL_PLAYLISTS_INITIAL_STATE  = { values: [], loading: false };;

export const allPlaylistsReducer = (state = ALL_PLAYLISTS_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'GET_ALL_PLAYLISTS':
            return { values: action.payload.map(item => item), loading: false }; 

        default:
            return state;
    }
}

