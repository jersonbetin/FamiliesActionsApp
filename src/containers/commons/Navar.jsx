import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { 
  Toolbar, AppBar, IconButton, 
  Typography, MenuItem, Menu, Drawer, List, Divider
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {  AccountCircle, ChevronLeft } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import { mainListItems, secondaryListItems } from './ListItems';

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

  state = {
    anchorEl: null,
    open: true
  };

  handleProfileMenuOpen = event => {
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
    
  render(){
    const { state: { anchorEl, open }, props: { classes, children } } = this;
    const isMenuOpen = Boolean(anchorEl);
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
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
          <List>{mainListItems}</List>
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
        </div>
    );
  }
}

Navbar.propsTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object,
}

export default withStyles(styles)(Navbar);
