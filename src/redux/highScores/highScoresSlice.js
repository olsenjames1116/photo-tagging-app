import { createSlice } from '@reduxjs/toolkit';

// Represents the stored high scores to be displayed on the exit screen
export const highScoresSlice = createSlice({
  name: 'highScores',
  initialState: {
    value: []
  },
  reducers: {
    setHighScores: (state, action) => {
      // Sets the high score state when the high scores have been retrieved from firestore
      state.value = [
        ...state.value,
        {
          id: action.payload[0],
          name: action.payload[1]['name'],
          time: action.payload[1]['time']
        }
      ];
    }
  }
});

export const { setHighScores, clearHighScores } = highScoresSlice.actions;
export default highScoresSlice.reducer;
