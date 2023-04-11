import { createSlice } from '@reduxjs/toolkit';

/* Assists in routing by displaying the welcome screen on the app loading and hiding it 
when the start button is pressed */
export const welcomeSlice = createSlice({
  name: 'welcome',
  initialState: {
    value: true
  },
  reducers: {
    // Set state to welcome user
    welcomeUser: (state) => state.value,
    // Set state to hide welcome screen
    playGame: (state) => !state.value
  }
});

export const { welcomeUser, playGame } = welcomeSlice.actions;
export default welcomeSlice.reducer;
