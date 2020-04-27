import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapSearchDispatchToProps } from "../store";
import Video from './Video';


// const youtubeEmbedLink = "https://www.youtube.com/embed/"
const VideoList = ({searchYoutube, videos}) => {
    useEffect(() => {
        searchYoutube('cute pets');
    }, [searchYoutube]);

    return (
        <div>
            {videos.map(video => <Video
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

