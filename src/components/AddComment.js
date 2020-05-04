import React, {useState, useEffect} from 'react';
import {createComment} from '../actions/commentAction';
import {connect} from 'react-redux';


const AddComment = ({video_id}) => {

    const [content, setContent] = useState('');

    const handleContentChange = e => {
        setContent(e.target.value);
    }

    return (
        <div>
            <form onSubmit={"handleSubmit"}>
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
        createComment: (content, video_id) => createComment(content, video_id).then(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AddComment)