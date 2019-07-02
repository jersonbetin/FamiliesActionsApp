import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
//import { spacing } from '@material-ui/system';
import TextField from './TextField';
import Button from './Button';
import classnames from 'classnames';

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
  },
  error: {
    color: 'red'
  }
});

const SignIn = ({id, password, error, onchange, onSubmit, classes}) => {
  return (
    <form className = {classnames(classes.root)}  noValidate >
      <Grid container spacing={8} direction="column" justify="center">
        <Grid item lg={12} md={12} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            className={classes.inputs}
            //fullWidth
            id="identification"
            type="text"
            label="Identificacion"
            name="id"
            autoComplete="Identificacion"
            value={id}
            autoFocus
            onChange={onchange}
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
            value={password}
            autoComplete="current-password"
            onChange={onchange}
          />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
        <Typography variant="subtitle2" className={classes.error} gutterBottom>
          { error &&
            `${error}`
          }
        </Typography>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
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
  id: PropTypes.string,
  password: PropTypes.string,
  error:PropTypes.string,
  onchange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default withStyles(styles)(SignIn);
