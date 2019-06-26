import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const TextFields = ({ 
  id, label, autoFocus, type, name,
  variant, margin, required, fullWidth , classname
}) => (
  <TextField
      variant={variant}
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      id={id}
      className={classname}
      label={label}
      name={name}
      type={type}
      //autoComplet={autoComplete}
      autoFocus={autoFocus}
    />
);

TextFields.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  //autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  variant: PropTypes.string,
  margin: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  classname: PropTypes.string,
}

TextFields.defaultProps = {
  //autoComplete: '',
  autoFocus: false,
  type: 'text',
  variant: 'outlined',
  margin: 'normal',
  required: false,
  fullWidth: true
}

export default TextFields;