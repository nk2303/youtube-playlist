const MY_PLAYLIST_INITIAL_STATE = { values: [], loading: false };

export const playlistReducer = (state = MY_PLAYLIST_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'CREATE_PLAYLIST':
            return {...state, values: [...state.values, action.payload.playlist]};

        case 'GETTING_MY_PLAYLIST':
            return { ...state, loading: true };

        case 'GET_MY_PLAYLISTS':
            return { values: action.payload.map(item => item), loading: false };

        case 'DELETE_PLAYLIST':
            return {...state, values: state.values.filter( p => p.id !== action.playlist_id)};

        case 'CREATE_PLAYLIST_VIDEO':
            return { ...state, values: state.values.map(p => p.id === action.payload.playlist.id
                ? { ...p, videos: [...p.videos, action.payload.video] 
                } : p) };
        
        case 'DELETE_PLAYLIST_VIDEO':
            return { ...state, values: state.values.map(p => p.id === action.payload.playlist_id
                ? { ...p, videos: p.videos.filter(v => v.id !== action.payload.video_id) } : p)
            };

        default:
            return state;
    }
}

