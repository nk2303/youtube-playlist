import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootswatch/dist/superhero/bootstrap.min.css";
import VideoList from './components/VideoList';


const App = (props) => {  
  return (
      <div className="App">
        <VideoList />
      </div>
    );
}

export default App;
