export const openModal = (videoInfo) => {
    console.log("open modal");
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