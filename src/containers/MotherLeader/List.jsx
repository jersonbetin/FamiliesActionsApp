import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { openSnack } from '../../actions/snackbar';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%'
  }
});

const columns = [
  { title: 'Ti', field: 'ti' },
  { title: 'identification', field: 'Identificacion' },
  { title: 'Nombre', field: 'user.name.first' },
  { title: 'Apellidos', field: 'user.name.last' },
  { title: 'Telefono', field: 'cellphone' },
  { title: 'Direccion', field: 'address' }
];
/*
data: [
  { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  {
    name: 'Zerya Betül',
    surname: 'Baran',
    birthYear: 2017,
    birthCity: 34,
  },
],*/

export class ListMotherLeader extends Component {
  static propTypes = {
    session: PropTypes.object,
  }

  state = {
    data: []
  }

  render() {
    const { state: { data }, props: { classes } } = this;
    return (
      <Grid container className={classes.root}>
        <Grid item lg={12} md={12} xs={12}>
          <MaterialTable
            title="Editable Example"
            columns={columns}
            data={data}
            editable={{
              onRowAdd: newData =>
                console.log(newData),
              onRowUpdate: (newData, oldData) =>
              console.log(newData, oldData),
              onRowDelete: oldData =>
                console.log(oldData),
            }}
          />
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
        </Grid>
      </Grid>
    );
  }
}

const  mapStateToProps = (state, ownProps) => {
  return {
    session: state.session.session
  }
}


const mapDispatchToProps = dispatch =>  bindActionCreators({ openSnack } , dispatch);

export default compose(
  withStyles(styles, {
      name: 'ListMotherLeader',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(ListMotherLeader);
