import React, { useState } from "react";
import { signup } from "../actions/userAction";
import { connect } from 'react-redux';

const Signup = ({ signupError, signup }) => {

    const [email, setEmail] = useState('');
    const [fullName, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = e => {setUsername(e.target.value)}
    const handleFullNameChange = e => {setFullname(e.target.value)}
    const handleEmailChange = e => {setEmail(e.target.value)}
    const handlePasswordChange = e => {setPassword(e.target.value)}
    const handleConfirmPasswordChange = e => {setConfirmPassword(e.target.value)}

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        signup(email, username, fullName, password) }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend className="text-center">Don't have an account?</legend>
                <div className="form-group row"></div>

                <div className="form-group">
                    <input
                        type="text"
                        className={`form-control radius-5px${signupError ? ' is-invalid' : ''}`}
                        id="username1"
                        placeholder="Username ..."
                        onChange={handleUsernameChange}
                        value={username}
                        ></input>
                </div>
                
                <div className="form-group">
                    <input 
                        type="text"
                        className={`form-control radius-5px${signupError ? ' is-invalid' : ''}`}
                        id="fullName"
                        placeholder="Full name ..."
                        onChange={handleFullNameChange}
                        value={fullName}
                        ></input>
                </div>

                <div className="form-group">
                    <input 
                        type="email" 
                        className={`form-control radius-5px${signupError ? ' is-invalid' : ''}`} 
                        id="InputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Email address ..."
                        onChange={handleEmailChange}
                        value={email}
                        ></input>
                </div>

                <div className="form-group">
                    <input 
                        type="password" 
                        className={`form-control radius-5px${signupError ? ' is-invalid' : ''}`} 
                        id="InputPassword1" 
                        placeholder="Password ..."
                        onChange={handlePasswordChange}
                        value={password}
                        ></input>
                </div>

                <div className="form-group">
                    <input 
                        type="password" 
                        className={`form-control radius-5px${signupError ? ' is-invalid' : ''}`} 
                        id="confirmPassword1" 
                        placeholder="Confirm password ..."
                        onChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        ></input>
                        {signupError
                        ? <div className="invalid-feedback">Sorry, that username or email was already taken.</div>
                        : null}
                </div>
                
                <button type="submit" className="btn btn-success radius-5px btn-block">Sign Up</button>
            </fieldset>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      signup: (email, username, fullName, password) => signup(email, username, fullName, password).then(dispatch)
    }
  }

export default connect(store => ({signupError: store.userContext.error}), mapDispatchToProps)(Signup);


