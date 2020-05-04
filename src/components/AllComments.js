import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Comment from './Comment';
import {getComments} from '../actions/commentAction';
import AddComment from './AddComment';

const AllComments = ({createComment, videoComments, getComments, youtube_video_id}) => {

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className="white-translucent-02 radius-5px margin-20 ">
            {console.log("WHERE ARE MY COMMENTS",videoComments)}
            <div className="margin-20"> <h5>All comments</h5> </div>
            <AddComment />
            {/* <form onSubmit={"handleSubmit"}>
            <fieldset>
                <div className="form-group margin-20">
                    <input
                      type="text"
                      className="form-control radius-5px"
                      id="commentInput"
                      placeholder="Add a comment ..."
                      onChange={handleContentChange}
                      value={content}
                    ></input>
                </div>
            </fieldset>
            </form> */}
            {videoComments.map(comment => <Comment comment={comment.content} />)}
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

