import { Component } from 'react';
import Fruit from './Fruit.js';

class Main extends Component {
  render() {
    return (
      <>
        <Fruit name="Pineapple" student="Daniel"/>
        <Fruit name="Peaches" student="Emily"/>
        <Fruit name="Apples" student="Kellen"/>
        <Fruit name="Blueberries" student="Spencer"/>

      </>
    )
  }
}

export default Main;