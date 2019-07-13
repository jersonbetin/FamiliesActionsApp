import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from '../commons/Slider';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

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
  const cards = [
    {
      Title: 'Acerca de',
      message: 'Esta página fue diseñada con el fin de que los usuarios pertenecientes al...',
      image: 'https://www.bucaramanga.gov.co/noticias/wp-content/uploads/2019/03/familias-en-accion.jpeg',
      url: '/About'
    }, 
    {
      Title: 'Noticias',
      message: 'Consulte todas las noticias que te conciernen acerca de familias en acción. ¡mantente informado!',
      image: 'https://primeronoticias.com.co/wp-content/uploads/2018/12/quinto-pago-de-Familias-en-Acci%C3%B3n-en-Barranquilla-800x450.jpg',
      url: '/news'
    }, 
    {
      Title: 'Contactenos',
      message: 'Contactate con nosotros, a un solo click.',
      image: 'http://www.fiscalcontable.net/wp-content/uploads/2016/04/contacto.png',
      url: '/contact'
    }
  ];
  return (
    <div className={classes.container}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={12} style={{height: '420px', marginBottom: '20px'}}>
          <Slider />
        </Grid>
      {/******** */}
        <Grid item xs={12} sm={12} md={12} style={{marginBottom: '20px', padding:'20px'}}>

          <Grid container spacing={8}>
            {
              cards.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    //title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      { card.Title }
                    </Typography>
                    <Typography>
                      { card.message }
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary" component={Link} to={card.url} >
                      Ir
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