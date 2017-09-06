import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'; 
import {init as firebaseInit} from './js/firebase';

class App extends Component {
  constructor(){
    super();
    firebaseInit();

    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-title">CryptoCesar</h2>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
