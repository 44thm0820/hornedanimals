import React, { Component } from 'react';
import Main from './Main.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <p>Header</p>
        <Main />
        <p>Footer</p>
      </div>
    )
  }
}