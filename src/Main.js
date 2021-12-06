import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';

class Main extends Component {

  render() {
    return (
      <div>
        {this.props.data.map( (beast) =>
          <HornedBeasts
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}/>)}
      </div>
    )
  }
}

export default Main;

