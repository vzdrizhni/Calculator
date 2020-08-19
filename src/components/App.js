import React from 'react';
import '../App.css';
import Display from './display.component';
import ButtonPanel from './buttonPanel.component';
import calculate from '../logic/calculate';
/* eslint-disable */
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName)); // eslint-disable-line react/no-access-state-in-setstate
  }
  
  render() {
    return (
      <div id="calc-container">
        <Display result={this.state.total} next={this.state.next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
  
}
/* eslint-enable */
export default App;
