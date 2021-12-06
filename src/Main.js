import { Component } from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends Component {

  render() {
    return (
      <div>
        {this.props.data.map( (beast) =>
          <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}/>)}
      </div>
    )
  }
}

export default Main;

