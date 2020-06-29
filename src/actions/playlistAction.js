const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

export const createPlaylist = (playlist_name, description) => {

    const playlist = {
        playlist: {
            playlist_name,
            description
        }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/playlists`, {
        method: "POST",
        headers: headers(),
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
    dispatch({
        type: "GETTING_MY_PLAYLIST"
    });
    return fetch(`${BACKEND_DOMAIN}/api/v1/playlists`, {
        method: "GET",
        headers: headers(),
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


export const deletePlaylist = (playlist_id, dispatch) => {
    fetch(`${BACKEND_DOMAIN}/api/v1/playlists/${playlist_id}`, {
        method: "DELETE",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch( {
                type: "DELETE_PLAYLIST_ERROR",
                error: res.error
            });
        }
        else {
            dispatch(
                {
                    type: "DELETE_PLAYLIST",
                    playlist_id: playlist_id
                }
            );
        }
    }).catch(err => {
        dispatch( {
            type: "DELETE_PLAYLIST_ERROR",
            error: err
        })
    });
}