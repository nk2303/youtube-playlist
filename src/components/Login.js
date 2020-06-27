import React, { useState } from "react";
import { connect } from 'react-redux';
import { login } from "../actions/userAction";

export const Login = ({ loginError, signin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => {
      setUsername(e.target.value);
    }
    
    const handlePasswordChange = e => {
      setPassword(e.target.value);
    }

    const handleDemo = () => {
      setUsername('kim');
      setPassword('123');
    }

    const handleSubmit = e => {
      e.preventDefault();
      e.stopPropagation();
      signin(username, password);
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend className="text-center">Have an account?</legend>
                <div className="form-group row"></div>
                
                <div className="form-group">
                    <input
                      type="text"
                      className={`form-control radius-5px${loginError ? ' is-invalid' : ''}`}
                      id="usernameLogIn"
                      placeholder="Username ..."
                      onChange={handleUsernameChange}
                      value={username}
                    ></input>
                </div>
                
                <div className="form-group">
                    <input
                      type="password" 
                      className={`form-control radius-5px${loginError ? ' is-invalid' : ''}`}
                      id="passwordLogIn" 
                      placeholder="Password ..."
                      onChange={handlePasswordChange}
                      value={password}
                    ></input>
                    {loginError
                      ? <div className="invalid-feedback">Sorry, that username and password doesn't match?</div>
                      : null}
                </div>
                <button type="submit" className="btn btn-info radius-5px btn-block">Log in</button>
                
            </fieldset>
            
        </form>
        <br/>
            <p className="text-center">Or log in with demo account</p>
            <button className="btn btn-warning radius-5px btn-block" onClick={handleDemo}>Demo</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (username, password) => login(username, password).then(dispatch)
  }
}

export default connect(store => ({loginError: store.userContext.loginError}), mapDispatchToProps)(Login);