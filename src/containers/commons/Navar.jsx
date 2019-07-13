import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { 
  Toolbar, AppBar, IconButton, 
  Typography, Menu, Drawer, List, Divider
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {  AccountCircle, ChevronLeft, Settings } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import { MainListItems, secondaryListItems } from './ListItems';
import SignIn from './Signin';
import ManagerSession from './ManagerSession';
import * as sessionActions from '../../actions/sessions';
import { handleObjects } from '../../helpers';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './MySnackbarContentWrapper';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  appBarSpacer: theme.mixins.toolbar,
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '10px'
  },
});


class Navbar extends Component {
  /*constructor(props){
    super(props);
  }*/

  state = {
    anchorEl: null,
    open: true,
    dataSession: {
      id: '',
      password: '',
      error: null
    },
    session: this.props.session,
    snack: {
      openSnack: false,
      message:'',
      type: 'success'
    }
  };

  componentWillReceiveProps(props){
    console.log('props recive', props);
    this.setState({...props, anchorEl: null });
  }

  handleProfileMenuOpen = event => {
    console.log(event.currentTarget);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    //this.handleMobileMenuClose();
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleSnakClose = () => {
    this.setState({ snack : { ...this.state.snack , openSnack: false } });
  };

  handleSnakOpen = (type, message) => {
    this.setState({ snack : { openSnack: true, type, message } });
  };

  onHandleChange = (event) => {
    const field = event.target.name
    let dataSession = this.state.dataSession
    dataSession[field] = event.target.value
    this.setState({dataSession})
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { props : { fetchSession, fetchSessionSuccess, fetchSessionFailure }, state: { dataSession } } = this;
    
    fetchSession(dataSession).payload
      .then(result => {
        const { data : { data } } = result;
        const { error, message } = data
        if(error){
          fetchSessionFailure(data);
          const newState = { ...this.state };
          newState.dataSession.error = message;
          this.setState(newState); 
          this.handleSnakOpen('error', 'Usuario y contraseña invalidos');  
        } else {
          fetchSessionSuccess(data)
          this.handleSnakOpen('success', 'Se ha logeado con exito');  
        }
      })
      .catch(e => {
        this.handleSnakOpen('error', 'Error en el servidor');  
        fetchSessionFailure()
      })
  }

  onHandleCloseSession = (e) => {
    e.preventDefault();
    const { props : { fetchCloseSession} } = this;
    
    fetchCloseSession()
  }
    
  render(){
    const { 
      state: { 
        anchorEl, 
        open, 
        dataSession : { 
          id, 
          password,
          error
        }, 
        session : { 
          data,
          login,
          data: {
            rol
          }
        },
        snack: {
          openSnack,
          message,
          type
        }
      }, 
      props: { 
        classes, 
        children 
      } 
    } = this;
    let name = {};
    if(data !== null && !handleObjects.isEmpty(data)){
      name = data.name;
    }else {
      name={
        first: 'Jerson David',
        last: 'Betin Pantoja'
      }
    }
    const isMenuOpen = Boolean(anchorEl);
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >   
      { !login && 
        <SignIn 
          id = {id} 
          password = {password} 
          error = {error} 
          onchange = {this.onHandleChange}
          onSubmit = {this.onHandleSubmit}
          />
        }
        { login &&
          <ManagerSession 
            user={name} 
            onClick={this.onHandleCloseSession}
          />
        }
      </Menu>
    );

    const renderDrawer = (
      <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <List><MainListItems isLog={login} rol= {rol}/></List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
      );
      return (
        <div className={classes.root}>
          <AppBar position="absolute" className={classNames(classes.appBar, open && classes.appBarShift)}>
            <Toolbar disableGutters={ !open } className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography 
                variant="h6" 
                color="inherit"  
                noWrap
                className={ classes.title}>
                FAMILIAS EN ACCION
              </Typography>
              <span className={classes.toolbarButtons}>
                  <IconButton color="inherit" onClick={this.handleProfileMenuOpen}>
                    <AccountCircle />
                  </IconButton>
                { login &&
                  <IconButton color="inherit" component={Link} to="/profile">
                    <Settings />
                  </IconButton>
                }
              </span>
            </Toolbar>
          </AppBar>
          { renderMenu }
          { renderDrawer }
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
              { children }
              {/* Footer */}
              <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  Creado por Katty y Carolina Vega.
                </Typography>
              </footer>            
          </main>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={openSnack}
            autoHideDuration={6000}
            onClose={this.handleSnakClose}>
            <MySnackbarContentWrapper
              onClose={this.handleSnakClose}
              variant={type}
              message={message}
            />
          </Snackbar>
        </div>
    );
  }
}

Navbar.propsTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object,
  session: PropTypes.object,
}

const  mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session
  }
}

const mapDispatchToProps = dispatch =>  bindActionCreators(sessionActions , dispatch)

//export default withStyles(styles)(Navbar);
export default compose(
  withStyles(styles, {
      name: 'Navbar',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(Navbar);