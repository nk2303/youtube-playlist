import React from 'react';
import AccountNav from '../components/AccountNav';
import AllPlaylist from './AllPlayList';
import { Route } from 'react-router-dom';
import UserInfo from './UserInfo';
import FollowedPlaylists from './FollowedPlaylists';
import Explore from './Explore';

const Playlists = () => {

    return (
        <div className='row main-w'>
            <AccountNav/>
            <Route exact path='/playlists/userinfo' render={(routeProps) => <UserInfo {...routeProps} />} />
            <Route exact path='/playlists' render={(routeProps) => <AllPlaylist {...routeProps} />} />
            <Route exact path='/playlists/followedplaylists' render={(routeProps) => <FollowedPlaylists {...routeProps} />} />
            <Route exact path='/playlists/exploreplaylists' render={(routeProps) => <Explore {...routeProps} />} />
        </div>
    )
}

export default Playlists