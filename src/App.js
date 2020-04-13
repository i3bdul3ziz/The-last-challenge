import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nave from './navebar/Nave.jsx';
import Home from './home/Home';
import About from './about/About';
import Allmovies from './moveis/Allmovies';
import {Switch , Route} from 'react-router-dom'
import OneMovei from './moveis/OneMovei.jsx';




export default class App extends Component {
  render() {
    return (
      <div>
      <Nave />

      <Switch>

        <Route path="/home" render={()=> <Home name = {"yasir"}/>} />
        <Route path="/about" component={About} />
        <Route exact path="/Allmovie" component={Allmovies} />

        <Route path = '/Allmovie/:id' component={OneMovei} />
      

      </Switch>


      </div>
    )
  }
}
