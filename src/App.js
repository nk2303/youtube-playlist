import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootswatch/dist/superhero/bootstrap.min.css";
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Landing from './containers/Landing';
import Account from './containers/Account';
import About from './containers/About';
import VideoShow from './containers/VideoShow';
import { BrowserRouter as Router, Route } from 'react-router-dom';



const App = (props) => {
  return (
      <Router>
        <NavBar />
        <Route exact path='/' render={(routeProps) => <Home {...routeProps} />} />
        <Route exact path='/account' render={(routeProps) => <Account {...routeProps} />} />
        <Route exact path='/landing' render={(routeProps) => <Landing {...routeProps} />} />
        <Route exact path='/about' render={(routeProps) => <About {...routeProps} />} />
        <Route exact path='/videoshow/:videoId' render={(routeProps) => <VideoShow {...routeProps} />} />
      </Router>
  );
}

export default App;
