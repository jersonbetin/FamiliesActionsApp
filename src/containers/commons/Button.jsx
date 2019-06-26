import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
const Buttons = ({type, fullWidth, variant, color, classname}) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      className={classname}
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
}

export default Buttons;