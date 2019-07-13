import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardContent, CardHeader, CardMedia, CardActions, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { indigo } from '@material-ui/core/colors';
import Form from './form';
 
const styles = theme => ({
  root: {
    margin: '20px 10px 20px 10px'
  },
  title: {
    color: indigo[500],
    margin: '20px 0 20px 0',
    textShadow: '1px 0px 0px #2196f3',
    textAlign: 'center'
  },
  media: {
    height: '400px'
  },
  text: {
    padding: '0 35px 35px 35px',
    textAlign: 'justify'
  }
});

const ContactUs = ({classes}) => {
  return (
    <Grid container className={classes.root}>
      <Grid item lg={5} style={{ padding: '4px'}}>
        <Card>
          <CardMedia
            className={classes.media}
            image="http://dacconsulting.com.co/images/contactenos-logo-1.png?crc=502295706"
          />
        </Card>
      </Grid>
      <Grid item lg={7} style={{margin: '5px 0 15px 0'}}>
        <Card style={{height: '400px'}}>
          <CardHeader
            title={<Typography className={classes.title} variant="h6" gutterBottom>Contactenos</Typography>}
          />
          <CardContent>
            <Form/>
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary">
              Enviar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

ContactUs.propTypes = {
  classes: PropTypes.object,
}
 
export default withStyles(styles)(ContactUs);