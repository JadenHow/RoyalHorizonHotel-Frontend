import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

export const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    userRole: null,
    token: null,
    isLoading: false
  },
  reducers: {
    postLoginRequest: (state) => {
      state.isLoading = true;
    },
    postLoginSuccess: (state, action) => {
      const decodedUser = jwtDecode(action.payload);
      state.userId = decodedUser.sub;
      state.userRole = decodedUser.roles;
      state.token = action.payload;
      state.isLoading = false;
    },
    postLoginFailure: (state) => {
      state.isLoading = false;
    },
    postRegisterRequest: (state) => {
      state.isLoading = true;
    },
    postRegisterSuccess: (state, action) => {
      state.isLoading = false;
    },
    postRegisterFailure: (state) => {
      state.isLoading = false;
    }
  }
});

export const {
  postLoginRequest,
  postLoginSuccess,
  postLoginFailure,
  postRegisterRequest,
  postRegisterSuccess,
  postRegisterFailure
} = loginSlice.actions;

export default loginSlice.reducer;
