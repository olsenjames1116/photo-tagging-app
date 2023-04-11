import { createSlice } from '@reduxjs/toolkit';

// Assists in routing by producing the exit screen when the game is complete
export const exitSlice = createSlice({
  name: 'exit',
  initialState: {
    value: false
  },
  reducers: {
    // The game is complete and the exit screen should be displayed
    exitGame: (state) => {
      state.value = !state.value;
    }
  }
});

export const { exitGame } = exitSlice.actions;
export default exitSlice.reducer;
