import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    userInfo: '',
    saleDispo: '',
    patient: '',
  },
  reducers: {
    getUser: () => {},
    setUser: (state = this.initialState, action) => ({
      ...state,
      userInfo: action.payload.user,
      saleDispo: action.payload.saleDispo,
      patient: action.payload.patient,
    }),
    addPatient: () => {},
  },
});

export const { getUser, setUser, addPatient } = userSlice.actions;
export default userSlice.reducer;
