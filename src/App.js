import React, { Component } from 'react';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import data from './data.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main data={data}/>
        <Footer />
      </div>
    )
  }
}