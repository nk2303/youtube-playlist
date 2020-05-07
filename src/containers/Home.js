import VideoList from '../components/VideoList';
import React from 'react';


const Home = (props) => {

    return (
        <div className="row home-pg black-bg h-800">
            <div className="col-3 max-height-800 overflow-auto"><VideoList /></div>
            <div className="col-3 max-height-800 overflow-auto"></div>
            <div className="col-3 max-height-800 overflow-auto"></div>
            <div className="col-3 max-height-800 overflow-auto"></div>
        </div>
    )
}

export default Home