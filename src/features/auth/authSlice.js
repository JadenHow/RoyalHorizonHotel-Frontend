import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

export const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    userRole: null,
    token: null,
    isLoading: false,
    error: null
  },
  reducers: {
    postLoginRequest: (state) => {
      state.isLoading = true;
    },
    postLoginSuccess: (state, action) => {
      const decodedUser = jwtDecode(action.payload);
      state.userId = decodedUser.sub;
      state.userRole = decodedUser.role;
      state.token = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    postLoginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    postRegisterRequest: (state) => {
      state.isLoading = true;
    },
    postRegisterSuccess: (state) => {
      state.isLoading = false;
      state.error = false;
    },
    postRegisterFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    postLogoutRequest: (state) => {
      state.isLoading = true;
    },
    logout: (state) => {
      state.userId = null;
      state.userRole = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const {
  postLoginRequest,
  postLoginSuccess,
  postLoginFailure,
  postRegisterRequest,
  postRegisterSuccess,
  postRegisterFailure,
  postLogoutRequest,
  logout,
  clearError
} = loginSlice.actions;

export default loginSlice.reducer;
