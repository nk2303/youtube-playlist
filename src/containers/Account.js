import React from 'react';
import AccountNav from '../components/AccountNav';
import AllPlaylist from './AllPlayList';
import { Route, Switch } from 'react-router-dom';
import UserInfo from './UserInfo';
import FollowedPlaylists from './FollowedPlaylists';

const Account = () => {

    return (
        <div className='row'>
            <div className='col-2 padding-0 '> <AccountNav /></div>
            <div className='col-10 dark-bg min-h-playlists'> 
                <div className='row'>
                    {/* <AllPlaylist/> */}

                        <Route exact path='/account/userinfo' render={(routeProps) => <UserInfo {...routeProps} />} />
                        {/* <Route path='/account/myplaylists' component={UserInfo} /> */}
                        <Route exact path='/account' render={(routeProps) => <AllPlaylist {...routeProps} />} />
                        <Route exact path='/account/followedplaylists' render={(routeProps) => <FollowedPlaylists {...routeProps} />} />

                    
                </div>

            </div>
        </div>
    )
}

export default Account