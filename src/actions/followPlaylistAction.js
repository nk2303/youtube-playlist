const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

export const followPlaylist = (playlist_id) => {

    const playlist_follow = {
        playlist_follower: { playlist_id }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/playlist_followers`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(playlist_follow)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_PLAYLIST_FOLLOWER_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_PLAYLIST_FOLLOWER",
            payload: res.playlist_follower
        }
    });
}

export const getFollowedPlaylists = (dispatch) => {
    dispatch({
        type: "GETTING_MY_FOLLOWED_PLAYLIST"
    });
    return fetch(`${BACKEND_DOMAIN}/api/v1/playlist_followers`, {
        method: "GET",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_MY_FOLLOWED_PLAYLISTS_ERROR",
                error: res.message
            };
        }
        dispatch(
            {
                type: "GET_MY_FOLLOWED_PLAYLISTS",
                payload: res
            }
        ) 
    });

}

export const unfollowPlaylist = (playlist_id) => {
    console.log('omg')
}