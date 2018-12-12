import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {LoginSide} from './components/LoginSide/LoginSide'
import {InfoSide} from './components/InfoSide/InfoSide'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="split infoSide">
            <InfoSide />
          </div>
          <div className="split loginSide">
            <LoginSide />
          </div>
      </div>
    );
  }
}

export default App;
