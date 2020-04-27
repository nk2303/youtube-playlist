import React from 'react';
import AllPlaylist from '../components/AllPlayList';
import AddVideoToPlaylistForm from "../components/AddVideoToPlaylistForm";

const Account = (props) => {

    return (
            <div>
                <div className="col-2"></div>
                <AllPlaylist className="col-10"/>
                <AddVideoToPlaylistForm />
            </div>
    )
}

export default Account