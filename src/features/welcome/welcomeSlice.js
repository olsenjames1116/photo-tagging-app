import { createSlice } from '@reduxjs/toolkit';

export const welcomeSlice = createSlice({
  name: 'welcome',
  initialState: {
    value: true
  },
  reducers: {
    welcome: (state) => state,
    play: (state) => !state
  }
});

export const { welcome, play } = welcomeSlice.actions;

export default welcomeSlice.reducer;
