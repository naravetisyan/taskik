import React, { Component } from 'react';
import ConsAndPros from './components/cons_and_pros';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConsAndPros />
      </div>
    );
  }
}

export default App;
