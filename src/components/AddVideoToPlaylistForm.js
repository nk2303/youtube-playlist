import React, { useEffect } from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";

const youtubeEmbedLink = "https://www.youtube.com/embed/"
class AddVideoToPlaylistForm extends React.Component {
    render() {
        const {videoInfo, closeModal} = this.props;
        console.log(closeModal);
        if (videoInfo) {
            return (
                <div class="modal" style={{display: 'block'}} >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <iframe title={videoInfo.id.videoId} src={youtubeEmbedLink + videoInfo.id.videoId} />
                            {/* <h5 class="modal-title">Save to Playlists</h5> */}
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <legend>Save to Playlist</legend>
                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked=""></input>
                                    <label class="custom-control-label" for="customCheck1">Playlist Name 1</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck2" checked=""></input>
                                    <label class="custom-control-label" for="customCheck2">Playlist Name 2</label>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default connect(store => ({ videoInfo: store.modalInfo }), dispatch => ({ closeModal: () => dispatch(closeModal())}))(AddVideoToPlaylistForm);





