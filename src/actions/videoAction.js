const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
// const userContext = JSON.parse(localStorage.getItem('user'));
const token = () => localStorage.getItem("token")

export const updateVideoPlaylist = () => {}


export const findVideo = (videoId, dispatch) => {
    //api services fil would have a global token so I just have refrence without passing it in
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
                    payload: res,
                }
            );
        }
    });
}
