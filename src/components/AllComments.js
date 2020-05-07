import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Comment from './Comment';
import AddComment from './AddComment';

const AllComments = ({thisVideoComments, videoInfoBE}) => {


    return (
        <div className="black-bg radius-5px margin-20 ">
            <div className="margin-20"> <h5>All comments</h5> </div>
            <AddComment videoInfoBE={videoInfoBE}/>
            {thisVideoComments.map(comment => 
                <div className="dark-bg radius-5px margin-10 ">
                    <Comment key={comment.id} comment={comment} />
                </div>)}
        </div>
        
    )
}

export default connect(store => ({thisVideoComments: store.targetVideo.comments || []}))(AllComments)
