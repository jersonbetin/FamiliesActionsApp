import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';
import About from './About'; 
import Navbar from './commons/Navar';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import RouterPrivate from './Routers/PrivateRouter';
import Unauth from './commons/Unauth';
import Profile from './Profile/Configure';

const styles = theme => ({
  root: {
    display:'block'
  }
});

class App extends Component {
  render() {
    const { classes, session } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navbar session={session}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/unauth" component={Unauth}/>
            <RouterPrivate exact path="/private" component={About} isLog={session.login}/>
            <RouterPrivate exact path="/profile" component={Profile} isLog={session.login}/>
          </Switch>
        </Navbar>
      </div>
    );
  }
}

App.propsTypes = {
  classes: PropTypes.object.isRequired,
}

const  mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session
  }
}
 
//export default withStyles(styles)(App);
export default compose(
  withStyles(styles, {
      name: 'App',
  }),
  connect(mapStateToProps, null),
)(App);