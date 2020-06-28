import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../actions/userAction';
import { Link } from 'react-router-dom';


const AccountNav = ({signout}) => {

    return (
        <div className="col-2 account-nav">
            <div className="list-group">
                <br/>
                <Link to='/playlists' className="btn btn-link" >My Playlists<span className="sr-only">(current)</span></Link><br/>
                <Link to='/playlists/followedplaylists' className="btn btn-link" >My Followed Playlists<span className="sr-only">(current)</span></Link><br/>
                <Link to='/playlists/exploreplaylists' className="btn btn-link" >Explore All Playlists<span className="sr-only">(current)</span></Link><br/>
                <Link to='/playlists/userinfo' className="btn btn-link" >My Account<span className="sr-only">(current)</span></Link><br/>
            </div>
            <button type="button" className="btn-danger signout-btn btn-block" onClick={signout}>Sign out</button>
        </div>
    )
}

export default connect(store => ({user: store.userContext.user}),
    (dispatch) => {
        return {
            signout: () => dispatch(logout())
        };
    })(AccountNav)
