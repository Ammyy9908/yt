import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  user: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState: intialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = appSlice.actions;

export const selectUser = (state) => state.app.user;

export default appSlice.reducer;
