import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Send, Delete } from '@material-ui/icons';
import { Grid, Card, CardMedia, Typography, InputLabel,
  Button, FormControl, Select, MenuItem, Input
 } from '@material-ui/core';
import axios from 'axios';
import TextField from '../commons/TextField';
import { API } from '../../constants';
import { openSnack } from '../../actions/snackbar';

const styles = thame => ({
  root: {
    //width: '100%'
    flexGrow: 1
  },
  media: {
    height: '400px'
  },
  submit: {
    margin: '2px'
  },
  rightIcon: {
    marginRight: '3px'
  }
});

export class UpdateMotherLeader extends Component {
  static propTypes = {
    classes: PropTypes.object,
  };
  state = {
    open: false,
    data: {
      ti: 'TI',
      identification: '',
      firstname: '',
      lastname: '',
      address: '',
      cellphone: '',
      //password: '',        
    }
  }

  componentWillMount(){

    const {
      motherLeader: {
        address,
        cellphone,
        identification,
        ti,
        user
      }
    } = this.props;
    this.setState({
      data: {
        ti: ti || 'TI',
        identification: identification || '',
        firstname: user ? user.name.first : '',
        lastname: user ? user.name.last : '',
        address: address || '',
        cellphone: cellphone || '',  
      }
    });
  }

  handleOpenSelect = () => {
    this.setState({open: true});
  }

  onHandleChange = (event) => {
    const field = event.target.name;
    let data = this.state.data;
    data[field] = event.target.value;
    this.setState({data});
  }

  onClear = () => {
    this.setState({
      data: {
        ti: 'TI',
        identification: '',
        firstname: '',
        lastname: '',
        address: '',
        cellphone: '',
        password: '',        
      }
    });
  }

  onHandleSubmit = () => {
    const { 
      props : { 
        session: { 
          data : {             
            token 
          } 
        } 
      }, 
      state: { 
        data: { 
          ti,
          identification,
          firstname,
          lastname,
          address,
          cellphone
        } 
      } 
    } = this;
    axios({
      method: 'PATCH',
      url: `${API}/mother-leader/${identification}`,
      headers: { 
        authorization: token 
      },
      data: {
        user: {
          name: {
            first: firstname,
            last: lastname
          } 
        }, 
        ti, 
        address, 
        cellphone 
      }
    })
    .then(
      result => {
        const { data : { data: { error } } } = result;
        if(error){
          this.props.openSnack('Error al actualizar madre lider', 'error');
        }else{
          this.props.openSnack('Actualizado con exito', 'success');
          //console.log(data);
        }
      }
    ).catch(
      e=> {
        this.props.openSnack('Error al actualizar madre lider', 'error');
      }
    )
  }

  render() {
    const { 
      props : { 
        classes 
      }, 
      state: { 
        data: { 
          ti,
          identification,
          firstname,
          lastname,
          address,
          cellphone
        } 
      } 
    } = this;
    return (
      <div className={classes.root} >
        <Grid container spacing={8} alignItems="flex-start">
          <Grid item lg={4} style={{padding: '10px'}}>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://pbs.twimg.com/media/DfL8sB4WsAAdel0.jpg"
                title="Paella dish"
              />
            </Card>
          </Grid>
          <Grid item lg={8}>
          <Grid container spacing={8} style={{padding: '8px'}}>
              <Grid item lg={12} md={12} xs={12}>
                <Typography 
                  variant="h6" 
                  align="center" 
                  color="textPrimary"
                  component="span">
                  ACTUALIZAR MADRE LIDER
                </Typography>
              </Grid>            
              <Grid item lg={6} md={3} xs={12}>
                  <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    disabled
                    className={classes.formControl}>
                    <InputLabel htmlFor="ti">Tipo idenficacion</InputLabel>
                    <Select
                      name="ti"
                      value={ti}
                      onChange={this.onHandleChange}
                      input={<Input id="ti" />}
                    >
                      <MenuItem value="TI">Tarjeta de identidad</MenuItem>
                      <MenuItem value="CC">Cedula de ciudadania</MenuItem>
                      <MenuItem value="EX">Cedula extranjera</MenuItem>
                    </Select>
                  </FormControl>
              </Grid>
              <Grid item lg={6} md={3} xs={12}> 
                <TextField
                  disabled
                  variant="outlined"
                  margin="normal"
                  required
                  className={classes.inputs}
                  fullWidth
                  id="identification"
                  type="text"
                  label="Identificacion"
                  name="identification"
                  autoComplete="Identificacion"
                  value={identification}
                  autoFocus
                  onChange={this.onHandleChange}
                />
              </Grid>
              <Grid item lg={6} md={3} xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  //className={classes.inputs}
                  fullWidth
                  id="firstname"
                  type="text"
                  label="Nombres"
                  name="firstname"
                  autoComplete="Nombres"
                  value={firstname}
                  autoFocus
                  onChange={this.onHandleChange}
                />
              </Grid>
              <Grid item lg={6} md={3} xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  className={classes.inputs}
                  fullWidth
                  id="lastname"
                  type="text"
                  label="Apellidos"
                  name="lastname"
                  autoComplete="Apellidos"
                  value={lastname}
                  onChange={this.onHandleChange}
                />
              </Grid>
              <Grid item lg={6} md={3} xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  className={classes.inputs}
                  fullWidth
                  id="cellphone"
                  type="text"
                  label="Telefono"
                  name="cellphone"
                  autoComplete="Telefono"
                  value={cellphone}
                  onChange={this.onHandleChange}
                />
              </Grid>
              <Grid item lg={6} md={3} xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  className={classes.inputs}
                  fullWidth
                  id="address"
                  type="text"
                  label="Direccion"
                  name="address"
                  autoComplete="Direccion"
                  value={address}
                  onChange={this.onHandleChange}
                />
              </Grid>
              {/*<Grid item lg={6} md={3} xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  className={classes.inputs}
                  fullWidth
                  id="password"
                  type="password"
                  label="Contraseña"
                  name="password"
                  autoComplete="Contraseña"
                  value={password}
                  onChange={this.onHandleChange}
                />
              </Grid>*/}
              <Grid item lg={12} md={12} xs={12}>
                <Button
                  type="submit"                  
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  size="large"
                  onClick={this.onHandleSubmit}
                >
                <Send className={classes.rightIcon}/> Actualizar
                </Button>
                {/*<Button
                  type="submit"                  
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  size="large"
                  onClick={this.onClear}
                >
                  <Delete className={classes.rightIcon} /> Limpiar
                </Button>*/}
              </Grid>
          </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const  mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session,
    motherLeader: state.commons.motherLeader.update
  }
}


const mapDispatchToProps = dispatch =>  bindActionCreators({ openSnack } , dispatch);

export default compose(
  withStyles(styles, {
      name: 'UpdateMotherLeader',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(UpdateMotherLeader);
