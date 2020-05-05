const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
const token = () => localStorage.getItem("token")

export const updateVideoPlaylist = () => {}


export const findVideo = (videoId, dispatch) => {
    return fetch(`${BACKEND_DOMAIN}/api/v1/videos/${videoId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token()
        },
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            dispatch({
                type: "GET_VIDEO_ERROR",
                error: res.message
            });
        }
        else {
            dispatch(
                {
                    type: "FIND_VIDEO",
                    payload: res.video
                }
            );
        }
    });
}
