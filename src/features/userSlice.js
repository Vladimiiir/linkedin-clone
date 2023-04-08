import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // user becomes the payload the action caries
    },
    logout: (state) => {
      state.user = null; // user become null
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors -> this is how we select the user in the components
export const selectUser = (state) => state.user.user; // returns the user property of the user slice

export default userSlice.reducer;
