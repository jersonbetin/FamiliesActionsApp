import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Send, Delete } from '@material-ui/icons';
import { Grid, Card, CardMedia, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import TextField from '../commons/TextField';
import { API } from '../../constants';
import { openSnack } from '../../actions/snackbar';
import { UpdateNameSession } from '../../actions/sessions';

const ownStyle = thame => ({
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

export class Configure extends Component {
  static propTypes = {
    classes: PropTypes.object,
    session: PropTypes.object,
  }

  state = {    
    dataSession: {
      firstname: '',
      lastname: ''
    },
  }

  constructor(props){
    super(props);
    this.state = {
      dataSession: {
        firstname: props.session.data.name.first,
        lastname: props.session.data.name.last
      }
    }
  }



  onHandleChange = (event) => {
    const field = event.target.name
    let dataSession = this.state.dataSession
    dataSession[field] = event.target.value
    this.setState({dataSession})
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { 
      props: { 
        session: { 
          data : { 
            user, 
            token 
          } 
        }
      }, 
      state : { 
        dataSession: 
        {
          firstname,
          lastname
        } 
      } 
    } = this;
    axios({
      method: 'PATCH',
      url: `${API}/users/${user}`,
      headers: { 
        authorization: token 
      },
      data: {
        name: {
          first: firstname,
          last: lastname
        }
      }
    })
    .then(
      result => {
        const { data : { data: { error , name } } } = result;
        if(error){
          alert(error.message);
          this.props.openSnack('Error al guardar configuracion', 'error');
        }else{
          this.props.openSnack('Guardado con exito', 'success');
          this.props.UpdateNameSession(name);
          //console.log(data);
        }
      }
    ).catch(
      e=> {
        console.log(e);
        this.props.openSnack('Error al guardar configuracion', 'error');
      }
    )
  }

  render() {
    const { 
      props: { 
        classes, 
        session: { 
          data : { 
            user, 
            rol
          } 
        } 
      },
      state: {
        dataSession: {
          firstname,
          lastname
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
                image="http://www.cybecys.com/wp-content/uploads/2017/07/no-profile.png"
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
                  INFORMACION DE PERFIL
                </Typography>
              </Grid>            
              <Grid item lg={6} md={3} xs={12}> 
                <TextField
                  disabled
                  variant="outlined"
                  margin="normal"
                  required
                  //className={classes.inputs}
                  fullWidth
                  id="rol"
                  type="text"
                  label="Rol"
                  name="rol"
                  autoComplete="Rol"
                  value={rol}
                  autoFocus
                  onChange={onchange}
                />
              </Grid>
              <Grid item lg={6} md={3} xs={12}> 
                <TextField
                  disabled
                  variant="outlined"
                  margin="normal"
                  required
                  //className={classes.inputs}
                  fullWidth
                  id="identification"
                  type="text"
                  label="Identificacion"
                  name="id"
                  autoComplete="Identificacion"
                  value={user}
                  autoFocus
                  onChange={onchange}
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
                  //className={classes.inputs}
                  fullWidth
                  id="lastname"
                  type="text"
                  label="Nombres"
                  name="lastname"
                  autoComplete="Apellidos"
                  value={lastname}
                  onChange={this.onHandleChange}
                />
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <Button
                  type="submit"                  
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  size="large"
                  onClick={this.onHandleSubmit}
                >
                <Send className={classes.rightIcon}/> Guardar
                </Button>
                <Button
                  type="submit"                  
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  size="large"
                  //onClick={onSubmit}
                >
                  <Delete className={classes.rightIcon} /> Eliminar
                </Button>
              </Grid>
          </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
const  mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session
  }
}


const mapDispatchToProps = dispatch =>  bindActionCreators({ openSnack, UpdateNameSession } , dispatch);

export default compose(
  withStyles(ownStyle, {
      name: 'Configure',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(Configure);
