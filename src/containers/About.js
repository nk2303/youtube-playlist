import React from 'react';

const About = (props) => {

    return (
        <div>
            <div className="jumbotron ">
                <h3 className="display-4">Youtube Playlist!</h3>
                <hr className="my-4"></hr>
                <p>A single page application created by a new programmer who often confused by Javascript syntax.</p>
                <p>Therefore she often look up tutorials on Youtube. But there are too many Advertisement.</p>
                <p>Hence she decided to make Youtube Playlist.</p>
            </div>
            <div className="padding-2-rem row">
                <div className="col-7">
                    <h5>How to use:</h5> <br/>
                    <ol>
                        <li><p>First, you will need a Youtube API key from Youtube:</p></li>
                        <p><a href="https://developers.google.com/youtube/v3/getting-started"> - Follow this link for Youtube API key instructions.</a></p>
                        <li><p>Then, you will need to install the application from Github.</p></li>
                        <p><a href="https://github.com/nk2303/chore-app-frontend"> - Github Youtube Playlist front-end repository.</a></p>
                        <p><a href="https://github.com/nk2303/youtube-playlist-ruby-on-rails"> - Github this Youtube Playlist back-end repository.</a></p>
                        <li><p>Follow instructions from Github documentation for both front-end and back-end.</p></li>
                    </ol>
                </div>
                <div className="col-5">
                    <br/><br/><br/><br/>
                    <h5>Why Youtube Playlist and not just Youtube ?</h5><br/>
                    <p>If you want to manage a lot of playlists.</p>
                    <p>And because videos without that many ads.</p>
                </div>

            </div>
        </div>
    )
}

export default About