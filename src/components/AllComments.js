import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Comment from './Comment';
import {createComment, getComments, deleteComment} from '../actions/commentAction';



const AllComments = ({createComment, videoComments, deleteComment, getComments}) => {

    useEffect(() => {
        console.log('component did mount');
        getComments()
    }, [])

    return (
        <div className="white-translucent-02 radius-5px margin-20 ">
            <div className="margin-20"> <h5>All comments</h5> </div>
            {videoComments.map(comment => <Comment comment={comment.content} />)}
        </div>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: () => getComments(dispatch),
        deleteComment: (comment_id) => deleteComment(comment_id, dispatch)
    }
}

export default connect(store => ({videoComments: store.videoComments}), mapDispatchToProps)(AllComments)

