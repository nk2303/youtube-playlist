import VideoList from '../components/VideoList';
import React from 'react';


const Home = () => {

    return (
        <div className="row home-pg black-bg h-800">
            <div className="col-3 max-height-800 overflow-auto"><VideoList /></div>
            <div className="col-9 max-height-800 pad-100">
            <p>Youtube Playlist demo video</p>
                <iframe 
                    title='How to use Youtube Playlist'
                    src='https://www.youtube.com/embed/axmKyyd579c'
                    style={{'height': '600px', 'width': '1000px'}} />
            </div>
        </div>
    )
}

export default Home