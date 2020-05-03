import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapSearchDispatchToProps } from "../store";
import VideoInfo from './VideoInfo';

const VideoList = ({searchYoutube, videos}) => {
    return (
        <div>
            {videos.map(video => <VideoInfo
                key={video.id.videoId}
                videoInfo={video}
                /> )}
        </div>
    )
}

const mapStateToProps = store => {
    return {
        videos: store.videos,
    }
};

export default connect(mapStateToProps, mapSearchDispatchToProps)(VideoList);

