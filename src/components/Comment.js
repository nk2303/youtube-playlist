import React from "react";
import {connect} from 'react-redux';
import { deleteComment} from '../actions/commentAction';

const Comment = ({comment, deleteComment}) => {

    const handleCommentDelete =(comment_id) => {
        deleteComment(comment_id)
    }

    return (
        <div className="margin-20">
            <button type="button" class="close white" data-toggle="modal" data-target={`#deleteComment${comment.id}`}>&times;</button>
            <div 
                class="radius-5px modal fade" 
                id={`deleteComment${comment.id}`} 
                tabindex="-1" role="dialog" 
                aria-labelledby={`deleteComment${comment.id}Label`} 
                aria-hidden="true">
                <div class="radius-5px modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={`deleteComment${comment.id}Label`} >Delete playlist</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Delete this comment ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary radius-5px" data-dismiss="modal">Cancel</button>
                            <button onClick={() => handleCommentDelete(comment.id)} type="submit" class="btn btn-danger radius-5px">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <p>{comment}</p>
        </div>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (comment_id) => deleteComment(comment_id, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(Comment)