import React, { Component } from 'react';


//when written in the return, curly braces enclose a statement/expression to be evaluated.

class HornedBeasts extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
        />
        <p>Description: {this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeasts;