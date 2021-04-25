import React from 'react';
import { useDispatch } from 'react-redux';
import { addPatient } from '../../redux/slices/userSlice';

const AddPatient = () => {
  const dispatch = useDispatch();
  const handelAddPatient = () => {
    dispatch(addPatient());
  };
  return (
    <div />
  );
};

export default AddPatient;
