import './App.css';

import React, { Component } from 'react';
import Home from "../src/containers/Home"

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
