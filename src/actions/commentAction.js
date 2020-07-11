const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")


const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

export const createComment = (content, user_id, youtube_video_id) => {
    
    const input = {
        comment: { content, user_id, youtube_video_id }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/comments`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(input)
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
            payload: res.comment
        }
    });
}

export const getComments = (youtube_video_id) => {
    return fetch(`${BACKEND_DOMAIN}/api/v1/comments/youtube_id/${youtube_video_id}`, {
        method: "GET",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "GET_COMMENTS_ERROR",
                error: res.error
            };
        }
        return {
            type: "GET_COMMENTS",
            payload: res
        }
    });
}


export const deleteComment = (comment_id, dispatch) => {
    fetch(`${BACKEND_DOMAIN}/api/v1/comments/${comment_id}`, {
        method: "DELETE",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch( {
                type: "DELETE_COMMENT_ERROR",
                error: res.error
            });
        }
        else {
            dispatch({
                    type: "DELETE_COMMENT",
                    comment_id: comment_id
            });
        }
    }).catch(err => {
        dispatch( {
            type: "DELETE_COMMENT_ERROR",
            error: {comment_id}
        })
    });
}
