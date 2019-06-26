import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
//import { spacing } from '@material-ui/system';
import TextField from './TextField';
import Button from './Button';

const styles = theme => ({
  paper: {
    margin: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '8px',
    alignItems: 'center',
  },
  avatar: {
    margin: '8px',
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: '24px 0 16px',
  },
  root: {
    margin: '20px'
  }
});

const SignIn = ({classes}) => {
  return (
    <form className={classes.form} noValidate className={classes.root}>
      <Grid container spacing={8} direction="column" justify="center">
        <Grid item lg={12} md={12} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            className={classes.inputs}
            //fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            //fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
        </Grid>
      </Grid>      
    </form>
  );
};

SignIn.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(SignIn);
