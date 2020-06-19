// const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
const BACKEND_DOMAIN= 'https://youtube-playlist-rubyonrails.herokuapp.com'
const token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

export const updateVideoPlaylist = () => {}

export const createVideo = (youtube_video_id) => {

    const input = {
        youtube_video_id
    }

    return fetch(`${BACKEND_DOMAIN}/api/v1/videos`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(input)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_VIDEO_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_VIDEO",
            payload: res.video
        }
    });
}

export const findVideo = (videoId, dispatch) => {
    return fetch(`${BACKEND_DOMAIN}/api/v1/videos/${videoId}`, {
        method: "GET",
        headers: headers(),
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
