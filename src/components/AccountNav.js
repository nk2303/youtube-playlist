import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../actions/userAction';
import { Link } from 'react-router-dom';


const AccountNav = ({signout}) => {

    return (

        <div className="list-group">
            <br/>
            {/* <button className="btn btn-link">My Playlists</button><br/> */}
            <Link to='/account' className="btn btn-link" >My Playlists<span className="sr-only">(current)</span></Link><br/>
            {/* <button className="btn btn-link">My Followed Playlists</button> <br/> */}
            <Link to='/account/followedplaylists' className="btn btn-link" >My Followed Playlists<span className="sr-only">(current)</span></Link><br/>
            {/* <button className="btn btn-link">My Account</button>  */}
            <Link to='/account/userinfo' className="btn btn-link" >My Account<span className="sr-only">(current)</span></Link><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <button type="button" className="radius-5px btn btn-danger margin-10" onClick={signout}>Sign out</button>
        </div>

    )
}

export default connect(store => ({user: store.userContext.user}),
    (dispatch) => {
        return {
            signout: () => dispatch(logout())
        };
    })(AccountNav)
