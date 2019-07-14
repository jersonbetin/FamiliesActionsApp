import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableHead, 
  TableCell, TableRow ,Paper, 
  TablePagination, Button 
} from '@material-ui/core';
import { Delete, Update } from '@material-ui/icons'

const styles = theme => ({
  root: {
    width: '100%'
  }
});


export class TablePaginations extends Component {
  static propTypes = {
    session: PropTypes.object,
    data: PropTypes.array,
    columns: PropTypes.object,
    paginationData: PropTypes.object,
    changePage: PropTypes.func,
    updateRow: PropTypes.func,
    deleteRow: PropTypes.func,
  }

  state = {
    data: [],
    columns : {},
    total: 0,
    page: 0,
    numberRows: 0,
  }

  constructor(props) {
    super(props);
    //console.log('props', props);
    const { 
      data,
      columns,
      paginationData: {
        total,
        page,
        numberRows
      }
    } = this.props;
    this.state = {
      data,
      columns,
      total,
      page,
      numberRows
    };
    
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.data!==this.props.data){
      const { 
        data,
        columns,
        paginationData: {
          total,
          page,
          numberRows
        }
      } = nextProps;
      this.setState({
        data,
        columns,
        total,
        page,
        numberRows
      });
    }
  }
  
  handleChangePage = (event, page) => {
    //this.setState({ page });
    event.preventDefault();
    this.props.changePage(page);
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  renderRows = (row, field) => {    
    const fields = field.split('.');
    let result = row;
    fields.map(f => {
      result = result[f];
    });
    return result;
  }

  render() {
    const { 
      state: { data, total, numberRows, page, columns: { titles, fields } },
      props: { updateRow, deleteRow }
    } = this;
    
    let display;

    if (data.length) {
      display = (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell component="td"/>
              {
                titles.map((t, index) => {
                  return (
                    <TableCell key={index} component="td">{t}</TableCell>
                  );
                })
              }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data
                .map((n, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" >                     
                      <Button  size="small" variant="contained" color="primary" onClick={() => {updateRow(n)}}>
                        <Update />
                      </Button>                    
                      <Button size="small" variant="contained" color="secondary" onClick={() => {deleteRow(n)}}>
                        <Delete />
                      </Button>
                    </TableCell>
                    {
                      fields.map((f, index) => (
                        <TableCell component="th" scope="row" key={index}>
                          { this.renderRows(n, f) }
                        </TableCell>
                      ))
                    }
                  </TableRow>                
                ))                
              }
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={total}
            rowsPerPage={numberRows}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'Numero de filas' },
              native: true,
            }}
            rowsPerPageOptions={[]}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      );
    } else {
      display = <div>Loading...</div>;
    }

    return <div>{display}</div>;
  }
}

export default  withStyles(styles)(TablePaginations);