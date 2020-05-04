import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom';
import VideoInteract from './VideoInteract';
import { findVideo } from '../actions/videoAction';

const youtubeEmbedLink = "https://www.youtube.com/embed/"
const VideoShow = ({getVideo, findVideo}) => {
    const { videoId } = useParams();

    useEffect(() =>{
        findVideo(videoId)
    }, [])

    if (getVideo.video) {
        return (
            <>
                <iframe title={getVideo.video.youtube_video_id} src={youtubeEmbedLink + getVideo.video.youtube_video_id} style={{'height': '800px', 'width': '1600px'}} />
                <VideoInteract youtube_video_id={getVideo.video.youtube_video_id} videoInfoBE={getVideo}/>
            </>
        )
    }
    return (null)
}


const mapDispatchToProps = (dispatch) => {
    return {
        findVideo: (videoId) => findVideo(videoId, dispatch)
    }
}


export default connect(store => ({getVideo: store.findVideo}), mapDispatchToProps)(VideoShow);


