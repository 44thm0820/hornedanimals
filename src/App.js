import React, { Component } from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Hello world!</h1> */}
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}