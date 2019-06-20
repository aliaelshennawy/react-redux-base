import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Login } from '../../pages';

class App extends Component {
  render() {
    return (
      // <Router>
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Login />
        {/* <Switch>{/* Add Your routes here </Switch> */}
      </div>
      // </Router>
    );
  }
}

export default App;
