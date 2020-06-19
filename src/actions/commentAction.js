// const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")
const BACKEND_DOMAIN= 'https://youtube-playlist-rubyonrails.herokuapp.com'

export const createComment = (content, user_id, video_id) => {

    const input = {
        comment: {
            content,
            user_id,
            video_id
        }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token()
        },
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
            error: {comment_id}
        })
    });
}
