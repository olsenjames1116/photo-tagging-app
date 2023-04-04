import { createSlice } from '@reduxjs/toolkit';

export const welcomeSlice = createSlice({
  name: 'welcome',
  initialState: {
    value: true
  },
  reducers: {
    welcomeUser: (state) => state.value,
    playGame: (state) => !state.value
  }
});

export const { welcomeUser, playGame } = welcomeSlice.actions;
export default welcomeSlice.reducer;
