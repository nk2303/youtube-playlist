import React from 'react';
import { connect } from "react-redux";
import './App.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootswatch/dist/superhero/bootstrap.min.css";
import NavBar from './components/NavBar';
import Home from './containers/Home';
import LoginPage from './containers/LoginPage';
import Playlists from './containers/Playlists';
import About from './containers/About';
import VideoShow from './containers/VideoShow';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const App = ({ user }) => {

  return (
      <Router>
        <NavBar/>
        <Route exact path='/' render={(routeProps) => <Home {...routeProps} />} />
        <Route
          path="/playlists" 
          render={(routeProps) => 
              user ? <Playlists {...routeProps} />
               : <Redirect to={{pathname: '/login', state: { from: routeProps.location }}} />
            }
          />
        <Route
          exact 
          path='/login' 
          render={(routeProps) =>
              user ? <Redirect to={{pathname: '/playlists'}} /> : <LoginPage {...routeProps} />} />
        <Route exact path='/about' render={(routeProps) => <About {...routeProps} />} />
        <Route exact path='/videoshow/:videoId' render={(routeProps) => <VideoShow {...routeProps} />} />
      </Router>
  );
}


export default connect( store => ({user: store.userContext.user}))(App);