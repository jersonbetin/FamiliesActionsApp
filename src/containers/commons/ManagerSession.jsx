import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Avatar, List, ListItem,ListItemText, ListItemIcon } from '@material-ui/core';
import Person from '@material-ui/icons/Person';

const styles = theme => ({
  root: {
    padding: '2px',
    width: '100%',
    maxWidth: '360px',
    heigth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    margin: '8px',
    backgroundColor: theme.palette.secondary.main,
  },
  listItem: {
    justifyContent:'center',
  },
  userText: {
    textAlign: 'center'
  }
});
 
const ManagerSession = ({classes, user, onClick}) => {
  const { first, last } = user;
  return (
    <List component="nav" className={classes.root} aria-label="Mailbox folders">
      <ListItem className={classes.listItem} disableGutters>
        <ListItemIcon>
          <Avatar className={classes.avatar}>
            <Person />
          </Avatar>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemText className={classes.userText} primary={`${first || ''} ${last ||  ''}`}/>
      </ListItem>
      <ListItem>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onClick}
        >
          Salir
        </Button>
      </ListItem>
    </List>
  );
}

ManagerSession.propTypes = {
  classes: PropTypes.object,
  user: PropTypes.object,
  onClick: PropTypes.func,
}
 
export default withStyles(styles)(ManagerSession);
