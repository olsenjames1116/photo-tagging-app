import { createSlice } from '@reduxjs/toolkit';

// Assists in routing by displaying the game screen to the user
export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    value: false
  },
  reducers: {
    // The start button has been pressed and the game screen should be loaded
    loadGame: (state) => {
      state.value = !state.value;
    },
    // The game is complete and the exit screen should be loaded
    endGame: (state) => {
      state.value = !state.value;
    }
  }
});

export const { loadGame, endGame } = gameSlice.actions;
export default gameSlice.reducer;
