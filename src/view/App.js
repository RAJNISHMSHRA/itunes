import React from 'react';
import './App.css';
import {HashRouter as Router} from 'react-router-dom'



import Routes from './Routes'
import Navigation from '../components/Navigation'


const App = () =>{
  return (
    <Router basename={'/'} >
    <div className="App">
        <Navigation />
        <Routes />
    </div>
    </Router>
  );
}

export default App;
