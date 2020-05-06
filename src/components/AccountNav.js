import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../actions/userAction';


const AccountNav = ({signout}) => {

    return (
        <div>
            <div className="list-group default">
                <a href="#" className=" list-group-item list-group-item-action">My Playlists</a>
                <a href="#" className="list-group-item list-group-item-action">My Followed Playlists</a> 
                <a href="#" className="list-group-item list-group-item-action">My Account</a> 
            </div>
            <br/>
            <button className="radius-5px btn btn-danger" onClick={signout}>Sign out</button>
        </div>      
    )
}

export default connect(store => ({user: store.userContext.user}),
    (dispatch) => {
        return {
            signout: () => dispatch(logout())
        };
    })(AccountNav)
