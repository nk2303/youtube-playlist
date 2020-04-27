export const modalReducer = (state = null, action) => {
    switch (action.type) {
        case 'MODAL_OPENED':
            return action.payload;
        case 'MODAL_CANCELLED':
            return null;
        default:
            return state;
    }
}