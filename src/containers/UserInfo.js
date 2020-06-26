import React from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner'

const UserInfo = ({user}) => {

    return user?
        <div className='black-bg min-h-playlists'> 
            <div className='row'>
                <div className='margin-25 width-300px'><h4 className="left-pad-20 text-muted">My information</h4> </div>
            </div>
            <div className='margin-25'><span className="text-info">Username:</span> <span>{user.username}</span></div>
            <div className='margin-25'><span className="text-info">Full name:</span> <span>{user.full_name}</span></div>
            <div className='margin-25'><span className="text-info">Email:</span> <span>{user.email}</span></div>
        </div>
        :
        <LoadingSpinner info='your profile'/>
}

export default connect(store => ({user: store.userContext.user}))(UserInfo)

