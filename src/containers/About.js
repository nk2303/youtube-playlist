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
                    <h5>Information</h5> <br/>
                    <ol>
                        <li><p>YouTube Playlist Github code source:</p></li>
                        <p><a href="https://github.com/nk2303/youtube-playlist"> - Youtube Playlist front-end repository.</a></p>
                        <p><a href="https://github.com/nk2303/youtube-playlist-ruby-on-rails"> - Youtube Playlist back-end repository.</a></p>
                        <li><p>About author Ngan Kim Khong:</p></li>
                        <p><a href="https://github.com/nk2303">Github</a> | <a href="https://ngankhong.myportfolio.com">Website</a> | <a href="https://www.linkedin.com/in/ngan-khong/">LinkedIn</a> </p>
                        <p>I'm an aspiring software engineer. It's my goal to keep on learning and improving my programming skills.</p>
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