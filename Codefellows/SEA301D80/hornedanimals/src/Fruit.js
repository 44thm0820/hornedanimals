import React, { Component } from 'react';


//when written in the return, curly braces enclose a statement/expression to be evaluated.

class Fruit extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Student: {this.props.student}</p>
      </div>
    )
  }
}

export default Fruit;