import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Comment from './Comment';
import AddComment from './AddComment';
import { useParams } from 'react-router-dom';
import { getComments } from '../actions/commentAction';

const AllComments = ({thisVideoComments, videoInfoBE, getComments}) => {

    const { videoId } = useParams();

    useEffect(() => {
        getComments(videoId);
    }, [])


    return (
        <div className="black-bg radius-5px margin-20 ">
            <div className="margin-20"> <h5>All comments</h5> </div>
            <AddComment youtube_video_id={videoId} videoInfoBE={videoInfoBE}/>
            {thisVideoComments.map(comment => 
                <div key={comment.id} className="dark-bg radius-5px margin-20 ">
                    <Comment comment={comment} />
                </div>)}
        </div>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (youtube_video_id) => getComments(youtube_video_id).then(dispatch)
    }
}

const mapStateToProps = (store) => {
    return {
        thisVideoComments: store.comments
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)
