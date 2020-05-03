import React from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';
import WelcomeToYP from '../components/WelcomeToYP';

const LoginPage = (props) => {

    return (
        <div>
            <WelcomeToYP />
            <div className="row">
                <div className="col-2"></div>
                <div className="col-3">
                    <Login />
                </div>
                <div className="col-2 text-center"><br/><br/><br/><br/><br/><br/><h4><br/>OR</h4></div>
                <div className="col-3">
                    <Signup />
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default LoginPage

