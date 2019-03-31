import React, { Component } from 'react';
import { render } from 'react-dom';
import Goo from './AnimatedBlob.js';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Goo />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
