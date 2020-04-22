import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchYoutube } from "../actions/youtubeSearch";

const youtubeEmbedLink = "https://www.youtube.com/embed/"
const VideoList = (props) => {
    useEffect(() => {
        props.searchYoutube('final fantasy');
    }, []);

    return (
        <div>
            {props.videos.map(video => <iframe key={video.id.videoId} src={youtubeEmbedLink + video.id.videoId} />)}
        </div>
    )
}

export default connect(
    (store) => {
        return {
            videos: store.videos
        }
    }, (dispatch) => {
        return {
            searchYoutube: () => searchYoutube().then(dispatch)
        }
    }
)(VideoList);