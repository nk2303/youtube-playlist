import React from "react";
import AllComments from "../components/AllComments";



const VideoInteract = (props) => {

    return (
        <div className="row">
            <div className="col-6">
                <AllComments youtube_video_id={props.youtube_video_id} videoInfoBE={props.videoInfoBE}/>
            </div>
            <div className="col-6"></div>
        </div>

    )
}

export default VideoInteract;

