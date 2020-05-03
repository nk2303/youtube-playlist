import React from 'react';

const About = (props) => {

    return (
        <div>
            <div className="jumbotron ">
                <h3 className="display-4">Youtube Playlist!</h3>
                <hr className="my-4"></hr>
                <p>A React-Redux app created by a new programmer who often confused by Javascript syntax.</p>
                <p>Therefore she often look up tutorials on Youtube. But there are too many Advertisement.</p>
                <p>Hence she decided to make Youtube Playlist.</p>
            </div>
            <div className="padding-2-rem">
                <h5>How to use:</h5>
                <p>First, you will need a Youtube API key.</p>
                <p>Then, you will need to download the application from Github.</p>
                <br/>
                <h5>Why Youtube Playlist and not just Youtube ?</h5>
                <p>Because ads.</p>
            </div>
        </div>
    )
}

export default About