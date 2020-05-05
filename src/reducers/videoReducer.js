const VIDEO_INITIAL_STATE = {};

export const videoReducer = (state = VIDEO_INITIAL_STATE, action) => {
    switch (action.type) {

        case 'CREATE_COMMENT':
            return {...state, comments: [...state.comments, action.payload]}
        case 'DELETE_COMMENT':
            return {...state, comments: state.comments.filter(c => c.id !== action.comment_id) }
        case 'FIND_VIDEO':
            return action.payload

        default:
            return state;
    }
}

// {nay la return cua create comment ko phai trong postman nhung cua res.comment
//     "id": 32,
//     "content": "This pup is so cute! xD XD",
//     "user_id": 20,
//     "video_id": 20
// }

// { Nay la return video object
//     "video": {
//         "id": 20,
//         "youtube_video_id": "sVaU1ctEkes",
//         "playlists": [
//             {
//                 "id": 42,
//                 "playlist_name": "Dogs",
//                 "description": "Videos about dogs",
//                 "created_at": "2020-05-05T05:23:02.823Z",
//                 "updated_at": "2020-05-05T05:23:02.823Z",
//                 "user_id": 20
//             }
//         ],
//         "comments": [
//             {
//                 "id": 27,
//                 "content": "I want this puppy!",
//                 "created_at": "2020-05-05T05:23:02.871Z",
//                 "updated_at": "2020-05-05T05:23:02.871Z",
//                 "user_id": 20,
//                 "video_id": 20
//             },
//             {
//                 "id": 32,
//                 "content": "This pup is so cute! xD XD",
//                 "created_at": "2020-05-05T18:02:31.174Z",
//                 "updated_at": "2020-05-05T18:02:31.174Z",
//                 "user_id": 20,
//                 "video_id": 20
//             }
//         ]
//     }
// }


//delete comment: return nothing