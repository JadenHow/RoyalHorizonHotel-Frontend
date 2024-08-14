import { createSlice } from '@reduxjs/toolkit';

export const roomSlice = createSlice({
  name: 'rooms',
  initialState: {
    rooms: [],
    roomTypes: [],
    currentRoom: null,
    availableRooms: [],
    isLoading: false,
    error: null
  },
  reducers: {
    fetchRoomsRequest: (state) => {
      state.isLoading = true;
    },
    fetchRoomsSuccess: (state, action) => {
      state.rooms = action.payload;
      state.isLoading = false;
    },
    fetchRoomsFailure: (state) => {
      state.isLoading = false;
    },
    fetchRoomTypesRequest: (state) => {
      state.isLoading = true;
    },
    fetchRoomTypesSuccess: (state, action) => {
      state.roomTypes = action.payload;
      state.isLoading = false;
    },
    fetchRoomTypesFailure: (state) => {
      state.isLoading = false;
    },
    createRoomRequest: (state) => {
      state.isLoading = true;
    },
    createRoomSuccess: (state, action) => {
      state.rooms.push(action.payload);
      state.error = false;
      state.isLoading = false;
    },
    createRoomFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    updateRoomRequest: (state) => {
      state.isLoading = true;
    },
    updateRoomSuccess: (state, action) => {
      const index = state.rooms.findIndex(room => room.id === action.payload.id);
      if (index !== -1) {
        state.rooms[index] = action.payload;
      }
      state.error = false;
      state.isLoading = false;
    },
    updateRoomFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    deleteRoomRequest: (state) => {
      state.isLoading = true;
    },
    deleteRoomSuccess: (state, action) => {
      state.rooms = state.rooms.filter(room => room.id !== action.payload);
      state.error = false;
      state.isLoading = false;
    },
    deleteRoomFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchRoomByIdRequest: (state) => {
      state.isLoading = true;
    },
    fetchRoomByIdSuccess: (state, action) => {
      state.currentRoom = action.payload;
      state.error = false;
      state.isLoading = false;
    },
    fetchRoomByIdFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchAvailableRoomsRequest: (state) => {
      state.isLoading = true;
    },
    fetchAvailableRoomsSuccess: (state, action) => {
      state.availableRooms = action.payload;
      state.isLoading = false;
    },
    fetchAvailableRoomsFailure: (state) => {
      state.isLoading = false;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const {
  fetchRoomsRequest,
  fetchRoomsSuccess,
  fetchRoomsFailure,
  fetchRoomTypesRequest,
  fetchRoomTypesSuccess,
  fetchRoomTypesFailure,
  createRoomRequest,
  createRoomSuccess,
  createRoomFailure,
  updateRoomRequest,
  updateRoomSuccess,
  updateRoomFailure,
  deleteRoomRequest,
  deleteRoomSuccess,
  deleteRoomFailure,
  fetchRoomByIdRequest,
  fetchRoomByIdSuccess,
  fetchRoomByIdFailure,
  fetchAvailableRoomsRequest,
  fetchAvailableRoomsSuccess,
  fetchAvailableRoomsFailure,
  clearError
} = roomSlice.actions;

export default roomSlice.reducer;
