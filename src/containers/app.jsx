import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';
import About from './About'; 
import Navbar from './commons/Navar';

const styles = theme => ({
  root: {
    display:'block'
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navbar>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Navbar>
      </div>
    );
  }
}

App.propsTypes = {
  classes: PropTypes.object.isRequired,
}
 
export default withStyles(styles)(App);