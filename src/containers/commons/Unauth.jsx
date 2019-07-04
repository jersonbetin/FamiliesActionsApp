import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const ownStyles =  thame => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '500px'
  },
  primaryColumns: {
    color: 'red',
    textShadow: ' 4px 0px 0px rgba(255,0,0,0.42)',
    fontWeight: 'bold'
  }
}); 

const Unauth = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.primaryColumns} gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        PAGINA NO DISPONIBLE
      </Typography>
      <Typography variant="body1" gutterBottom>
          Lo sentimos, la pagina no se encuentra disponile.
      </Typography>
    </div>
  );
}
 
export default withStyles(ownStyles)(Unauth);