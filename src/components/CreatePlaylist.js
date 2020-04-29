import React, { useState } from 'react';
import { connect } from 'react-redux';
import {createPlaylist} from '../actions/playlistAction';
import { userReducer } from '../reducers/userReducer';

const CreatePlaylist = ({createPlaylist, token}) => {


    const [playlistName, setplaylistName] = useState('');
    const [description, setDescription] = useState('');

    const handlePlaylistNameChange = e => {
        setplaylistName(e.target.value);
      }
      
      const handleDescriptionChange = e => {
        setDescription(e.target.value);
      }
  
      const handleSubmit = e => {
        console.log(playlistName, description, token)
        e.preventDefault();
        e.stopPropagation();
        createPlaylist(playlistName, description, token);
      }

    return (
        <div className='row'>
            <button
                type="submit"
                className="btn btn-primary radius-5px btn-block"
                data-toggle="modal"
                data-target="#createPlaylist" >Create new Playlist</button>
            <div className="modal fade" id="createPlaylist" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="createPlaylist">Create new Playlist</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control radius-5px"
                                    id="exampleInputEmail1"
                                    placeholder="Playlist name..."
                                    onChange={handlePlaylistNameChange}
                                    value={playlistName}
                                    ></input>
                            </div>
                            
                            <div className="form-group">
                                <label forhtml="createPlaylist">Description</label>
                                <textarea
                                    className="form-control radius-5px"
                                    id="createPlaylist"
                                    placeholder="Playlist description..."
                                    rows="4"
                                    onChange={handleDescriptionChange}
                                    value={description}
                                    ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </fieldset>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    {/* <button type="submit" className="btn btn-primary">Save changes</button> */}
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPlaylist: (playlistName, description, token) => {
            createPlaylist(playlistName, description, token).then(dispatch)
        }
    }
}


export default connect(store => ({token: store.userContext.jwt}), mapDispatchToProps)(CreatePlaylist)