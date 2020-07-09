const COMMENT_INITIAL_STATE = [];

export const commentReducer = (state = COMMENT_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'GET_COMMENTS':
            console.log("ALL COMMENTS HERE", action.payload)
            return action.payload.map(item => item);
        case 'CREATE_COMMENT':
            return [...state, action.payload]
        // case 'DELETE_COMMENT':
        //     return {...state, comments: state.comments.filter(c => c.id !== action.comment_id) }
        // case 'FIND_VIDEO':
        //     return action.payload
        // case 'CREATE_VIDEO':
        //     return action.payload

        default:
            return state;
    }
}
