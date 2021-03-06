import React, {useState} from 'react';
import {createComment} from '../actions/commentAction';
import {connect} from 'react-redux';


const AddComment = ({youtube_video_id, videoInfoBE, createComment, userInfo}) => {

    const [content, setContent] = useState('');

    const handleContentChange = e => {
        setContent(e.target.value);
    }
    
    const handleCommentSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        createComment(content, userInfo.id, youtube_video_id);
        setContent('');
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
        createComment: (content, user_id, youtube_video_id) => createComment(content, user_id, youtube_video_id).then(dispatch)
    }
}

export default connect(store => ({userInfo: store.userContext.user}), mapDispatchToProps)(AddComment)