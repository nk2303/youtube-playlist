// const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
const BACKEND_DOMAIN= 'https://youtube-playlist-rubyonrails.herokuapp.com'
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

export const createVideoPlaylist = (playlist_id, video_id, dispatch) => {

    const videoPlaylist = {
        playlist_id,
        video_id
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/playlist_videos`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(videoPlaylist)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch({
                type: "CREATE_PLAYLIST_VIDEO_ERROR",
                error: res.error
            });
        }
        else {
            dispatch({
                type: "CREATE_PLAYLIST_VIDEO",
                payload: res.playlist_video
            });
        }
    });
}

export const deleteVideoPlaylist = (playlist_id, video_id, dispatch) => {
    fetch(`${BACKEND_DOMAIN}/api/v1/playlist_videos/${video_id}/${playlist_id}`, {
        method: "DELETE",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch( {
                type: "DELETE_PLAYLIST_VIDEO_ERROR",
                error: res.error
            });
        }
        else {
            dispatch(
                {
                    type: "DELETE_PLAYLIST_VIDEO",
                    payload: {playlist_id, video_id}
                }
            );
        }
    });
}