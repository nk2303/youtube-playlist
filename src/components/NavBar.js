import React, { useState } from "react";
import { connect } from "react-redux";
import { mapSearchDispatchToProps } from "../store";
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const [searchKeyword, setSearchKeywork] = useState('');


    const handleSearch = (e) => {
        e.preventDefault();
        props.searchYoutube(searchKeyword);
    }

    const handleChange = (e) => {
        setSearchKeywork(e.target.value);
    }
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to='/account' className="navbar-brand" >Account<span className="sr-only">(current)</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link" >Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link" >About<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
                    <input
                        className="form-control mr-sm-2 radius-5px min-width-500"
                        type="text"
                        placeholder="Search" 
                        onChange={(e) => handleChange(e)} value={searchKeyword}
                    />
                    <button onClick={handleSearch} className="radius-5px btn btn-secondary my-2 my-sm-0 " type="button">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default connect(null, mapSearchDispatchToProps)(NavBar)