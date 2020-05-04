import React from "react";
import AllComments from "../components/AllComments";



const VideoInteract = (props) => {

    return (
        <div className="row">
            <div className="col-9">
                <AllComments youtube_video_id={props.youtube_video_id}/>
            </div>
            <div className="col-3">
            </div>
        </div>

    )
}

export default VideoInteract;

