import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: null,
    isLoading: false,
    error: null
  },
  reducers: {
    fetchUsersRequest: (state) => {
      state.isLoading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    fetchUsersFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchUserByEmailRequest: (state) => {
      state.isLoading = true;
    },
    fetchUserByEmailSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    fetchUserByEmailFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    deleteUserRequest: (state) => {
      state.isLoading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload.id);
      state.isLoading = false;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserByEmailRequest,
  fetchUserByEmailSuccess,
  fetchUserByEmailFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure
} = userSlice.actions;

export default userSlice.reducer;
