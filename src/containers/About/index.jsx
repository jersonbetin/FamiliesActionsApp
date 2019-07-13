import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { indigo } from '@material-ui/core/colors';
 
const styles = theme => ({
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

const About = ({classes}) => {
  return (
    <Grid container>
      <Grid item lg={12} >
        <Typography className={classes.title} variant="h4" gutterBottom>ACERCA DE</Typography>
      </Grid>
      <Grid item lg={5} style={{ padding: '4px'}}>
        <Card>
          <CardMedia
            className={classes.media}
            image="https://ladoradacaldas.micolombiadigital.gov.co/sites/ladoradacaldas/content/files/000318/15878_primer-pago-mas-familias-en-accion_1024x600.jpg"
          />
        </Card>
      </Grid>
      <Grid item lg={7}>
        <Typography
          className={classes.text}
          variant="body2" 
          gutterBottom
        >
        <b>Familias en Acción</b> ​es el programa de Prosperidad Social que entrega a todas aquellas familias pobres y pobres extremas con niños, niñas y adolescentes un incentivo económico condicionado que complementa sus ingresos para la formación de capital humano, la generación de movilidad social, el acceso a programas de educación media y superior, la contribución a la superación de la pobreza y pobreza extrema y a la prevención del embarazo en la adolescencia.​
        <br/>
        <br/>
        Esta página fue diseñada con el fin de que los usuarios pertenecientes al
        programa de MFA puedan acceder a una mayor información referente a su
        estado en el programa, el beneficiario podrá encontrar en esta aplicación
        web su estado financiero, fechas de pago, noticias de eventos a realizarse,
        actualización de datos personales (dirección, teléfono, e-mail, etc.).
        </Typography>
      </Grid>
    </Grid>
  );
}

About.propTypes = {
  classes: PropTypes.object,
}
 
export default withStyles(styles)(About);