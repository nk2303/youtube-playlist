import React from 'react';


const SearchPlaylist = () => {

    return (
        <form className="form-inline my-2 my-lg-0" >
            <input
                className="form-control mr-sm-2 radius-5px min-width-300"
                type="text"
                placeholder="Find my playlists ..." 
                // onChange={'(e) => handleChange(e)'} 
                // value={''}
            />
            <button className="radius-5px btn btn-secondary my-2 my-sm-0 margin-10" type="button">Look up</button>
        </form>    
    )
}

export default SearchPlaylist
