import React, { Component } from 'react';
import '../App.css';
import Display from './display.component';
import ButtonPanel from './buttonPanel.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div id="calc-container">
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
