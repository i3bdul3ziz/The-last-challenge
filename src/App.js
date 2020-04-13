import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nave from './navebar/Nave.jsx';
import Home from './home/Home';
import About from './about/About';
import Allmovies from './moveis/Allmovies';
import {Switch , Route} from 'react-router-dom'




export default class App extends Component {
  render() {
    return (
      <div>
      <Nave />

      <Switch>

        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Allmovei" component={Allmovies} />
       {/* <Home /> 
      <About />
      <Allmovies /> */}

      </Switch>


      </div>
    )
  }
}
