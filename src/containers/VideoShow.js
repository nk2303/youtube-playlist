import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom';
import VideoInteract from './VideoInteract';
import { findVideo } from '../actions/videoAction';

const youtubeEmbedLink = "https://www.youtube.com/embed/"
const VideoShow = ({targetVideo, findVideo}) => {
    const { videoId } = useParams();

    // useEffect(() =>{
    //     findVideo(videoId)
    // }, []);

    if (targetVideo) {
        return (
            <div className="black-bg">
                <iframe title={targetVideo.youtube_video_id} src={youtubeEmbedLink + videoId} style={{'height': '800px', 'width': '1600px'}} />
                {/* <VideoInteract youtube_video_id={targetVideo.youtube_video_id} videoInfoBE={targetVideo}/> */}
            </div>
        )
    } 
    return (null)
}


const mapDispatchToProps = (dispatch) => {
    return {
        findVideo: (videoId) => findVideo(videoId, dispatch)
    }
}

const mapStateToProps = (store) => {
    return {
        targetVideo: store.targetVideo
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);


