import React from 'react';
import '../App.css';
import Display from './display.component';
import ButtonPanel from './buttonPanel.component';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick(buttonName) {
    this.setState(calculate(this.setState, buttonName))
  }

  render () {
    return (
      <div id="calc-container">
        <Display result={this.state.total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
  
};

export default App;
