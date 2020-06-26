import React, { useState } from 'react';
import { connect } from 'react-redux';
import {createPlaylist} from '../actions/playlistAction';


const CreatePlaylist = ({createPlaylist}) => {


    const [playlistName, setplaylistName] = useState('');
    const [description, setDescription] = useState('');

    const handlePlaylistNameChange = e => {
        setplaylistName(e.target.value);
      }
      
    const handleDescriptionChange = e => {
    setDescription(e.target.value);
    }
  
    const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    createPlaylist(playlistName, description);
    setplaylistName('');
    setDescription('');
    }

    return (
        <div>
            <button
                type="submit"
                className="playlist-bg width-300px btn btn-secondary radius-5px text-muted"
                data-toggle="modal"
                data-target="#createPlaylist ">+ Add new playlist</button>
            <div className="modal fade " id="createPlaylist" tabIndex="-1" role="dialog" aria-labelledby="createPlaylistLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content radius-5px">
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
                                        value={ playlistName }
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
                                <button onClick={handleSubmit} type="submit" className="btn btn-primary radius-5px" data-dismiss="modal">Create Playlist</button>
                            </fieldset>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPlaylist: (playlistName, description) => {
            createPlaylist(playlistName, description).then(dispatch)
        }
    }
}



export default connect(store => ({token: store.userContext.jwt}), mapDispatchToProps)(CreatePlaylist)