const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
// const userContext = JSON.parse(localStorage.getItem('user'));
let token = () => localStorage.getItem("token")

export const createComment = (content, videoId, playlistId) => {

    const comment = {
        comment: {
            content,
            videoId,
            playlistId
        }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token()
        },
        body: JSON.stringify(comment)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_COMMENT_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_COMMENT",
            payload: res
        }
    });
}

export const getComments = (dispatch) => {
    fetch(`${BACKEND_DOMAIN}/api/v1/comments`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token()
        }, 
    }).then(res => res.json())
    
    .then(res => {
        console.log(res);
        if (res.message) {
            dispatch( {
                type: "GET_COMMENTS_ERROR",
                error: res.message
            });
        }
        else{
        dispatch(
            {
                type: "GET_COMMENTS",
                payload: res
            }
        ) }
    });
}



export const deleteComment = (comment_id, dispatch) => {
    fetch(`${BACKEND_DOMAIN}/api/v1/comments/${comment_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token()
        },
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch( {
                type: "DELETE_COMMENT_ERROR",
                error: res.error
            });
        }
        else {
            dispatch(
                {
                    type: "DELETE_COMMENT",
                    comment_id: comment_id
                }
            );
        }
    }).catch(err => {
        dispatch( {
            type: "DELETE_COMMENT_ERROR",
            error: err
        })
    });
}
