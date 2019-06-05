import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
'mdbreact';
import classnames from 'classnames';

const styles = (theme) => ({
  content: {
    width: '100%',
    height: '200px',
    padding: '24px'
  },
  imageContent:{
    width: '100%',
    height: '400px'
  }
});

const pictures = [
  { image: 'https://villadesandiegodeubatecundinamarca.micolombiadigital.gov.co/sites/villadesandiegodeubatecundinamarca/content/files/000051/2526_informacion-programa-mas-familias-en-accion_1024x600.jpg'},
  { image: 'https://www.bancoagrario.gov.co/SAC/PublishingImages/boton_pagos_familias.jpg'},
  { image: 'http://www.kapitalstereo.com/wp-content/uploads/2018/09/FAMILIAS-EN-ACCION.jpg'},
];

class Slider extends Component {
  render() {
    const { props : { classes } } = this;
    return (
      <div>
        <MDBContainer className={classes.content}>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={false}
            showIndicators={false}
            className="z-depth-1"
          >
            <MDBCarouselInner>
            {
              pictures.map(({image}, i) => {
                return (
                  <MDBCarouselItem 
                    itemId={i+1}
                    key={i}>
                    <MDBView>
                      <img
                        className={classnames('d-block w-100', classes.imageContent)}
                        src={image}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                )
              })
            }
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

Slider.propTypes =  {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Slider);