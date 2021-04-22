import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authslice',
  initialState: {
    role: '',
    isAuthenticated: false,
    loginError: '',
  },
  reducers: {
    ifLoged: () => {},
    getLogin: () => {},
    setLogin: (state = this.initialState, action) => ({
      ...state,
      role: action.payload.role,
      isAuthenticated: action.payload.isAuthenticated,
      loginError: '',
    }),
    loginError: (state = this.initialState, action) => ({
      ...state,
      loginError: action.payload,
    }),
  },
});

export const { setLogin, getLogin, ifLoged, loginError } = authSlice.actions;
export default authSlice.reducer;
