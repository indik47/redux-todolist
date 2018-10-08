import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskInput from './components/TaskInput'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TaskInput/>
      </div>
    );
  }
}

export default App;
