import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeToYP = (props) => {

    return (
        <div className="jumbotron text-center">
                <h3 className="display-4">Welcome to Youtube Playlist!</h3>
                <hr className="my-4"></hr>
                <p>A single page application where you can search and save videos as playlist from Youtube with an account.</p>
                <br/>
                <Link to='/about' className="btn btn-primary radius-5px" >Learn more<span className="sr-only">(current)</span></Link>
                
        </div>
    )
}

export default WelcomeToYP