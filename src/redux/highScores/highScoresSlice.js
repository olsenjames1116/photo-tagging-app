import { createSlice } from '@reduxjs/toolkit';

export const highScoresSlice = createSlice({
  name: 'highScores',
  initialState: {
    value: []
  },
  reducers: {
    setHighScores: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setHighScores } = highScoresSlice.actions;
export default highScoresSlice.reducer;
