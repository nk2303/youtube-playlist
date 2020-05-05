import React from 'react';
import { connect } from "react-redux";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootswatch/dist/superhero/bootstrap.min.css";
import NavBar from './components/NavBar';
import Home from './containers/Home';
import LoginPage from './containers/LoginPage';
import Account from './containers/Account';
import About from './containers/About';
import VideoShow from './containers/VideoShow';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const App = ({ user }) => {
  return (
       // <Router history={history}>
            //app call api and set user right away
            //redux action
            //dispacth that new user to the store
            //make sure to include a mapDispacthToPropr in app, trigger this aciton, 
            //received dispacthc, get the user 
            //dispatch user to the store
      <Router>
        <NavBar />
        <Route exact path='/' render={(routeProps) => <Home {...routeProps} />} />
        <Route
          exact
          path="/account" 
          render={(routeProps) => 
              user ? <Account {...routeProps} />
               : <Redirect to={{pathname: '/login', state: { from: routeProps.location }}} />}
          />
        <Route
          exact 
          path='/login' 
          render={(routeProps) =>
              user ? <Redirect to={{pathname: '/account'}} /> : <LoginPage {...routeProps} />} />
        <Route exact path='/about' render={(routeProps) => <About {...routeProps} />} />
        <Route exact path='/videoshow/:videoId' render={(routeProps) => <VideoShow {...routeProps} />} />
      </Router>
  );
}


export default connect( store => ({user: store.userContext.user}))(App);
