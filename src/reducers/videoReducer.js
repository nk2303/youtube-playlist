const VIDEO_INITIAL_STATE = {};

export const videoReducer = (state = VIDEO_INITIAL_STATE, action) => {
    switch (action.type) {

        // case 'DELETE_COMMENT':
        //     return {...state, comments: state.comments.filter(c => c.id !== action.comment_id) }
        case 'FIND_VIDEO':
            return action.payload
        case 'CREATE_VIDEO':
            return action.payload

        default:
            return state;
    }
}
