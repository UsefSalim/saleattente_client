import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
  const { id, label, formik } = props;
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={id}
      autoComplete={id}
      autoFocus
      value={formik.values.id}
      onChange={formik.handleChange}
      error={formik.touched.id && Boolean(formik.errors.id)}
      helperText={formik.touched.id && formik.errors.id}
    />
  );
};

export default Input;
