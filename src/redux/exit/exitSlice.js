import { createSlice } from '@reduxjs/toolkit';

export const exitSlice = createSlice({
  name: 'exit',
  initialState: {
    value: false
  },
  reducers: {
    exitGame: (state) => {
      state.value = !state.value;
    }
  }
});

export const { exitGame } = exitSlice.actions;
export default exitSlice.reducer;
