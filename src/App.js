import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>

      </div>
    );
  }
}

export default App;
