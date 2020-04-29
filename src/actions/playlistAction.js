const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
const userContext = JSON.parse(localStorage.getItem('user'));
let token = () => localStorage.getItem("token")

export const createPlaylist = (playlistName, description) => {

    const playlist = {
        playlist: {
            playlist_name: playlistName,
            description
        }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/playlists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token()
        },
        body: JSON.stringify(playlist)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_PLAYLIST_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_PLAYLIST",
            payload: res
        }
    });
}

export const getMyPlaylists = (dispatch) => {
    //api services fil would have a global token so I just have refrence without passing it in
    return fetch(`${BACKEND_DOMAIN}/api/v1/playlists`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token()
        },
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_MY_PLAYLISTS_ERROR",
                error: res.message
            };
        }
        dispatch(
            {
                type: "GET_MY_PLAYLISTS",
                payload: res
            }
        ) 
    });
}