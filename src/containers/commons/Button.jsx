import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
const Buttons = ({type, fullWidth, variant, color, classname, onClick}) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      className={classname}
      onClick = { onClick }
    >
      Sign In
    </Button>
  )
};

Buttons.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
  classname: PropTypes.string,
  onClick: PropTypes.func,
}

export default Buttons;