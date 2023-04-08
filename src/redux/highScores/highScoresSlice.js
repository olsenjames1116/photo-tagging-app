import { createSlice } from '@reduxjs/toolkit';

export const highScoresSlice = createSlice({
  name: 'highScores',
  initialState: {
    value: []
  },
  reducers: {
    setHighScores: (state, action) => {
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
