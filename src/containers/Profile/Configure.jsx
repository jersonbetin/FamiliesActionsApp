import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const ownStyle = thame => ({
  root: {
    width: '100%'
  }
});

export class Configure extends Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  state = {
    
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        
      </Fragment>
    )
  }
}

export default compose(
  withStyles(ownStyle, {
      name: 'Configure',
  }),
  connect(null, null),
)(Configure);
