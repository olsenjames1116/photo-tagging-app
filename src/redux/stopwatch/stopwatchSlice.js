import { createSlice } from '@reduxjs/toolkit';

// Represents the  timer to track the user's score
export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    value: 0
  },
  reducers: {
    // Increments the watch by a second every second
    incrementWatch: (state) => {
      state.value = state.value + 1000;
    }
  }
});

export const { incrementWatch } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;
