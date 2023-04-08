import { createSlice } from '@reduxjs/toolkit';

export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    value: 0
  },
  reducers: {
    incrementWatch: (state) => {
      state.value = state.value + 1000;
    }
  }
});

export const { incrementWatch } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;
