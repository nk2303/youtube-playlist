export const openModal = (videoInfo) => {
    return {
        type: 'MODAL_OPENED',
        payload: videoInfo
    }
}

export const closeModal = () => {
    return {
        type: 'MODAL_CANCELLED',
    }
}