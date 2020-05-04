import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Comment from './Comment';
import {getComments} from '../actions/commentAction';
import AddComment from './AddComment';

const AllComments = ({videoComments, getComments, videoInfoBE}) => {
    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className="white-translucent-02 radius-5px margin-20 ">
            {console.log("WHERE ARE MY COMMENTS",videoComments)}
            <div className="margin-20"> <h5>All comments</h5> </div>
            <AddComment />
            {videoInfoBE.video.comments.map(comment => <Comment comment={comment.content} />)}
        </div>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: () => getComments(dispatch),
        // createComment: (content, video_id) => createComment(content, video_id).then(dispatch)
    }
}

export default connect(store => ({videoComments: store.videoComments}), mapDispatchToProps)(AllComments)

