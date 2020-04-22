const VIDEOS_INITIAL_STATE = [];

const searchReducer = (state = VIDEOS_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH_COMPLETED':
            return action.payload.items.map(item => item);
        default:
            return state;
    }
}

export default searchReducer;