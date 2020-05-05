import React, {useState, useEffect} from 'react';
import {createComment} from '../actions/commentAction';
import {connect} from 'react-redux';


const AddComment = ({videoInfoBE, createComment, userInfo}) => {

    const [content, setContent] = useState('');

    const handleContentChange = e => {
        setContent(e.target.value);
    }

    useEffect(() => {
        createComment()
    }, [])
    
    const handleCommentSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log("USER ID WHERE", userInfo)
        console.log("VIDEO ID WHERE", videoInfoBE)
        createComment(content, userInfo.id, videoInfoBE.video.id);
    }
    
    return (
        <div>
            <form onSubmit={handleCommentSubmit}>
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
            </form>
        </div>      
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (content, user_id, video_id) => createComment(content, user_id, video_id).then(dispatch)
    }
}

export default connect(store => ({userInfo: store.userContext.user}), mapDispatchToProps)(AddComment)