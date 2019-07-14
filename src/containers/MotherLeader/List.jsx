import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TablePagination from '../commons/TablePagination';
import { openSnack } from '../../actions/snackbar';
import { fillInMotherLeader } from '../../actions/commons';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { API } from '../../constants';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%'
  },
  title: {
    textAlign: 'center',
    margin: '10px 0 10px 0',
    textTransform: 'uppercase'
  }
});


const columns = {
  titles: ['TI', 'Identificacion', 'Nombres', 'Apellidos', 'Telefono', 'Direccion'],
  fields: ['ti', 'identification', 'user.name.first', 'user.name.last', 'cellphone', 'address']
};

export class ListMotherLeader extends Component {
  static propTypes = {
    session: PropTypes.object,
  }

  state = {
    data: [],
    total: 2,
    page: 0,
    numberRows: 1,
    redirect: false

  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/mother-leaders/update' />
    }
  }

  componentWillMount(){
    this.fethData(1,2);
  }

  fethData = (page) => {
    const { 
      props : { 
        session: { 
          data : {             
            token 
          } 
        } 
      }
    } = this;
    axios({
      method: 'get',
      url: `${API}/mother-leader?page=${page}&num=${4}`,
      headers: { 
        authorization: token 
      }
    })
    .then(
      r => {
        const { data : { data: { error }, data } } = r;
        if(error){
          this.props.openSnack('Error al consultar datos', 'error');
        }else{
          const { result, count, num, page } = data;
          this.setState({
            data: result,
            total: Math.ceil(count/num),
            page: page-1,
            //numberRows: num-1
          });
        }
      }
    ).catch(
      e=> {
        this.props.openSnack('Error al consultar datos', 'error');
      }
    );
  }

  onFecthRows = (page) => {
    this.fethData(page + 1,2);
  }

  onUpdate = (item) => {
    this.props.fillInMotherLeader(item);
    this.setState({redirect: true});
  }

  onDelete = (item) => {
    console.log('delete',item);
    const {identification} = item;
    const { 
      props : { 
        session: { 
          data : {             
            token 
          } 
        } 
      }
    } = this;
    axios({
      method: 'Delete',
      url: `${API}/mother-leader/${identification}`,
      headers: { 
        authorization: token 
      }
    })
    .then(
      r => {
        const { data : { data: { error } } } = r;
        if(error){
          this.props.openSnack('El registro no se encuentra', 'error');
        }else{
          this.props.openSnack('El registro se elimino con exito', 'success');
          this.fethData(1);          
        }
      }
    ).catch(
      e=> {
        this.props.openSnack('Error al eliminar registro', 'error');
      }
    )
  }

  render() {
    const { state: { data, numberRows, page, total }, props: { classes } } = this;
    return (
      <Grid container className={classes.root}>
        <Grid item lg={12} md={12} xs={12}>
          <Typography variant="h6" className={classes.title}>Lista de Madres Lideres</Typography>    
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <TablePagination 
            data={data}
            paginationData={{ total, page, numberRows}}
            columns={columns}
            changePage={this.onFecthRows}
            deleteRow={this.onDelete}
            updateRow={this.onUpdate}
          />
        </Grid>
        {this.renderRedirect() }
      </Grid>
    );
  }
}

const  mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session
  }
}


const mapDispatchToProps = dispatch =>  bindActionCreators({ openSnack, fillInMotherLeader } , dispatch);

export default compose(
  withStyles(styles, {
      name: 'ListMotherLeader',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(ListMotherLeader);
