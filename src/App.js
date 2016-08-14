import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MyData} from './MyData';
import {Well} from './Well';
import {Red} from './Red';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <MyData withContainer={Well}></MyData>
        <MyData withContainer={Red}></MyData>
      </div>
    );
  }
}

export default App;
