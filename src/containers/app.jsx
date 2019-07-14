import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';
import About from './About'; 
import Navbar from './commons/Navar';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import RouterPrivate from './Routers/PrivateRouter';
import Unauth from './commons/Unauth';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './commons/MySnackbarContentWrapper';
import Profile from './Profile/Configure';
import ContactUs from './ContactUs';
import { closeSnack } from '../actions/snackbar';
import ManagerMotherLeader from './MotherLeader/Manager';
import ListMotherLeader from './MotherLeader/List';
import UpdateMotherLeader from './MotherLeader/Update';

const styles = theme => ({
  root: {
    display:'block'
  }
});

class App extends Component {
  render() {
    const { classes, session, snackbar: { options: { open, message, type} } } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navbar session={session}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={ContactUs}/>
            <Route exact path="/unauth" component={Unauth}/>
            <RouterPrivate exact path="/private" component={About} isLog={session.login}/>
            <RouterPrivate exact path="/profile" component={Profile} isLog={session.login}/>
            <RouterPrivate exact path="/mother-leaders/new" component={ManagerMotherLeader} isLog={session.login}/>
            <RouterPrivate exact path="/mother-leaders/list" component={ListMotherLeader} isLog={session.login}/>
            <RouterPrivate exact path="/mother-leaders/update" component={UpdateMotherLeader} isLog={session.login}/>
          </Switch>
        </Navbar>

        <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={this.props.closeSnack}>
            <MySnackbarContentWrapper
              onClose={this.props.closeSnack}
              variant={type}
              message={message}
            />
          </Snackbar>
      </div>
    );
  }
}

App.propsTypes = {
  classes: PropTypes.object.isRequired,
}

const  mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session,
    snackbar: state.snackbar
  }
}

const mapDispatchToProps = dispatch =>  bindActionCreators({ closeSnack } , dispatch);

//export default withStyles(styles)(App);
export default compose(
  withStyles(styles, {
      name: 'App',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(App);