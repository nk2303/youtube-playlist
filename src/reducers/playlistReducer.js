const PLAYLIST_INITIAL_STATE = [];

export const playlistReducer = (state = PLAYLIST_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'CREATE_PLAYLIST':
            return [...state, action.payload.playlist];

        case 'GET_MY_PLAYLISTS':
            return action.payload.map(item => item);

        case 'DELETE_PLAYLIST':
            return state.filter((p) => p.id !== action.playlist_id);

        case 'CREATE_PLAYLIST_VIDEO':
            return state.map(p => p.id === action.payload.playlist.id
                ? {
                    ...p,
                    videos: [...p.videos, action.payload.video] 
                }
                : p);
        
        case 'DELETE_PLAYLIST_VIDEO':
            return state.map(p => p.id === action.payload.playlist_id
                ? { ...p, videos: p.videos.filter(v => v.id !== action.payload.video_id) } : p);

        default:
            return state;
    }
}

