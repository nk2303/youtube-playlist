import React from 'react';
import AccountNav from '../components/AccountNav';
import AllPlaylist from './AllPlayList';
import { Route } from 'react-router-dom';
import UserInfo from './UserInfo';
import FollowedPlaylists from './FollowedPlaylists';

const Account = () => {

    return (
        <div className='row main-w'>
            <div className='col-2 padding-0 '> 
                <AccountNav />
            </div>
            <div className='col-10 black-bg min-h-playlists'> 
                <div className='row'>
                    <Route exact path='/account/userinfo' render={(routeProps) => <UserInfo {...routeProps} />} />
                    <Route exact path='/account' render={(routeProps) => <AllPlaylist {...routeProps} />} />
                    <Route exact path='/account/followedplaylists' render={(routeProps) => <FollowedPlaylists {...routeProps} />} />
                </div>

            </div>
        </div>
    )
}

export default Account