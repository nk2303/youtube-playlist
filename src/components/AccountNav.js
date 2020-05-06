import React from 'react';
import CreatePlaylist from './CreatePlaylist';


const AccountNav = (props) => {

    return (
        <div>
            <div className="list-group default">
                <a href="#" className=" list-group-item list-group-item-action">My Playlists</a>
                <a href="#" className="list-group-item list-group-item-action">My Followed Playlists</a> 
                <a href="#" className="list-group-item list-group-item-action">My Account</a> 
            </div>
            <br/>
            <CreatePlaylist />
        </div>      
    )
}

export default AccountNav
