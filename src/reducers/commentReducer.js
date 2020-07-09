const COMMENT_INITIAL_STATE = [];

export const commentReducer = (state = COMMENT_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'GET_COMMENTS':
            return action.payload.map(item => item);
        case 'CREATE_COMMENT':
            return [...state, action.payload]
        case 'DELETE_COMMENT':
            return state.filter( c => c.id !== action.comment_id)

        default:
            return state;
    }
}
