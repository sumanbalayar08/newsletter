import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';
import Issue from './Screens/Issue';
import Social from './Screens/Social';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <Issue/>
        <Social/>
      </div>
    );
  }
}

export default App;
