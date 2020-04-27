import React from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';

const Account = (props) => {

    return (
        <div>
            <div className="jumbotron text-center">
                <h3 className="display-4">Welcome to Youtube Playlist!</h3>
                <hr className="my-4"></hr>
                <p>A single page application where you can search and save videos as playlist from Youtube with an account.</p>
                <p className="lead">
                    <a className="btn btn-primary radius-5px" href="#" role="button">Learn more</a>
                </p>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-3">
                    <Login />
                </div>
                <div className="col-2"></div>
                <div className="col-3">
                    <Signup />
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default Account

