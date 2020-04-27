import VideoList from '../components/VideoList';
import React from 'react';
import AddVideoToPlaylistForm from "../components/AddVideoToPlaylistForm";

const Home = (props) => {

    return (
        <div>
            <VideoList />
            <AddVideoToPlaylistForm />
        </div>
    )
}

export default Home