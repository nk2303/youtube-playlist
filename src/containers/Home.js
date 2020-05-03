import VideoList from '../components/VideoList';
import React from 'react';


const Home = (props) => {

    return (
        <div>
            <div className="col-4"></div>
            <div className="col-3">
                <VideoList />
            </div>
            <div className="col-4"></div>
        </div>
    )
}

export default Home