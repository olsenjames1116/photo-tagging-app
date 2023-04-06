import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    value: false
  },
  reducers: {
    loadGame: (state) => {
      state.value = !state.value;
    },
    endGame: (state) => {
      state.value = !state.value;
    }
  }
});

export const { loadGame, endGame } = gameSlice.actions;
export default gameSlice.reducer;
