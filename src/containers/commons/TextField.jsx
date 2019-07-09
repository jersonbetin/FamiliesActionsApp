import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const TextFields = ({ 
  id, label, autoFocus, type, name, value,
  variant, margin, required, fullWidth , classname, onChange, disabled
}) => (
  <TextField
      disabled = {disabled}
      variant={variant}
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      id={id}
      className={classname}
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}

TextFields.defaultProps = {
  //autoComplete: '',
  autoFocus: false,
  type: 'text',
  variant: 'outlined',
  margin: 'normal',
  required: false,
  fullWidth: true,
  disabled: false
}

export default TextFields;