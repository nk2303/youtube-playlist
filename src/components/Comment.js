import React from "react";
import {connect} from 'react-redux';
import { deleteComment} from '../actions/commentAction';

const Comment = ({comment, deleteComment, user}) => {

    const handleCommentDelete =(comment_id) => {
        deleteComment(comment_id)
    }

    return (
        <div className="margin-20 padding-5">
            <button type="button" className="close white" data-toggle="modal" data-target={`#deleteComment${comment.id}`}>&times;</button>
            <div 
                className="radius-5px modal fade" 
                id={`deleteComment${comment.id}`} 
                tabIndex="-1" role="dialog" 
                aria-labelledby={`deleteComment${comment.id}Label`} 
                aria-hidden="true">
                <div className="radius-5px modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`deleteComment${comment.id}Label`} >Delete playlist</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Delete this comment ?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary radius-5px" data-dismiss="modal">Cancel</button>
                            <button onClick={() => handleCommentDelete(comment.id)} type="submit" className="btn btn-danger radius-5px" data-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            {console.log(comment.user)}
            <p>{comment.user}</p>
            <p>{comment.content}</p>
        </div>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (comment_id) => deleteComment(comment_id, dispatch)
    }
}


export default connect(store => ({user: store.userContext.user}), mapDispatchToProps)(Comment)