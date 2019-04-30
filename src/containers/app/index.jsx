import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

export default class App extends Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home 2</Link>
          <Link to="/about">About</Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </main>      
      </div>
    )
  }
}
