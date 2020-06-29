const FOLLOWED_PLAYLIST_INITIAL_STATE = { values: [], loading: false };

export const followedPlaylistsReducer = (state = FOLLOWED_PLAYLIST_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'CREATE_PLAYLIST_FOLLOWER':
            return {...state, values: [...state.values, action.payload.playlist]};

        case 'GETTING_MY_FOLLOWED_PLAYLIST':
            return { ...state, loading: true };

        case 'GET_MY_FOLLOWED_PLAYLISTS':
            return { values: action.payload.map(item => item), loading: false }; 

        case 'CREATE_PLAYLIST_FOLLOWER':
            return {...state, values: [...state.values, action.payload.playlist]};
        
        case 'DELETE_PLAYLIST_FOLLOWER':
            return {...state, values: state.values.filter( p_f => p_f.id !== action.payload)};

        default:
            return state;
    }
}

