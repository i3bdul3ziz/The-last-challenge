import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nave from './navebar/Nave.jsx';
import Home from './home/Home';
import About from './about/About';
import Allmovies from './moveis/Allmovies';



export default class App extends Component {
  render() {
    return (
      <div>
      <Nave />
      <Home />
      <About />
      <Allmovies />
      </div>
    )
  }
}
