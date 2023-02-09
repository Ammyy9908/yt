import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  user: null,
  layout: "18% 82%",
};

export const appSlice = createSlice({
  name: "app",
  initialState: intialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLayout: (state, action) => {
      state.layout = action.payload;
    },
  },
});

export const { setUser, setLayout } = appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectLayout = (state) => state.app.layout;

export default appSlice.reducer;
