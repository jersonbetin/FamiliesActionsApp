import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from '../commons/Slider'
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'

const styles = () => ({
  container: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

const Home = (props) => {
  const { classes }  = props;
  const cards = [{}, {}, {}];
  return (
    <div className={classes.container}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={12} style={{height: '420px', marginBottom: '20px'}}>
          <Slider />
        </Grid>
      {/******** */}
        <Grid item xs={12} sm={12} md={12} style={{marginBottom: '20px', padding:'20px'}}>

          <Grid container spacing={8}>
            {cards.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch);



Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, {
      name: 'Home',
  }),
  connect(null, mapDispatchToProps),
)(Home);