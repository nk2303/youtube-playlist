import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../actions/userAction';
import { Link } from 'react-router-dom';


const AccountNav = ({signout}) => {

    return (
        <div className="h-800">
            <div className="list-group">
                <br/>
                <Link to='/account' className="btn btn-link" >My Playlists<span className="sr-only">(current)</span></Link><br/>
                <Link to='/account/followedplaylists' className="btn btn-link" >My Followed Playlists<span className="sr-only">(current)</span></Link><br/>
                <Link to='/account/userinfo' className="btn btn-link" >My Account<span className="sr-only">(current)</span></Link><br/>
            </div>
            <button type="button" className="btn btn-danger signout-btn" onClick={signout}>Sign out</button>
        </div>
    )
}

export default connect(store => ({user: store.userContext.user}),
    (dispatch) => {
        return {
            signout: () => dispatch(logout())
        };
    })(AccountNav)
