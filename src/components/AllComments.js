import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Comment from './Comment';
import {getComments} from '../actions/commentAction';
import AddComment from './AddComment';

const AllComments = ({getVideoComments, getComments, videoInfoBE}) => {
    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className="white-translucent-02 radius-5px margin-20 ">
            <div className="margin-20"> <h5>All comments</h5> </div>
            <AddComment videoInfoBE={videoInfoBE}/>
            {getVideoComments.map(comment => 
                <div className="white-translucent-02 radius-5px margin-20 "><Comment key={comment.id} comment={comment} /></div>)}
        </div>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: () => getComments(dispatch)
    }
}

export default connect(store => ({getVideoComments: store.videoComments}), mapDispatchToProps)(AllComments)

