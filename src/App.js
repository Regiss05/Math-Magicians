import React, { PureComponent } from 'react';
import { Calculator } from './components/Calculator';
import './App.css';

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
