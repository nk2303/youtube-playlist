import React from 'react';


const SearchPlaylist = () => {

    return (
        <form className="form-inline my-2 my-lg-0 margin-10" >
            <input
                className="form-control mr-sm-2 radius-5px min-width-600"
                type="text"
                placeholder="Find playlist by name..." 
            />

        </form>    
    )
}

export default SearchPlaylist
