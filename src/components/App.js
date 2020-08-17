import React from 'react';
import '../App.css';
import Display from './display.component';
import ButtonPanel from './buttonPanel.component';

const App = () => (

  <div id="calc-container">
    <Display result="0" />
    <ButtonPanel />
  </div>
);

export default App;
