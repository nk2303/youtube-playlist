const COMMENT_INITIAL_STATE = [];

export const commentReducer = ( state = COMMENT_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CREATE_COMMENT':
            return [...state, action.payload.comment];
        case 'GET_COMMENTS':
            console.log("COMMENT", action)
            // return action.payload.filter(c => c.video_id === action.youtube_video_id);
            return action.payload.map(c => c)
        case 'DELETE_COMMENT':
            return state.filter(c => c.id !== action.comment_id)
        default:
            return state;
    }
} 