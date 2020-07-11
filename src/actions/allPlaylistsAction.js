const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

export const getAllPlaylists = (dispatch) => {
    return fetch(`${BACKEND_DOMAIN}/api/v1/allplaylists`, {
        method: "GET",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_ALL_PLAYLISTS_ERROR",
                error: res.message
            };
        }
        dispatch(
            {
                type: "GET_ALL_PLAYLISTS",
                payload: res
            }
        ) 
    });

}