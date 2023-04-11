import { createSlice } from '@reduxjs/toolkit';

// Represents the target characters the user is to look for
export const targetCharactersSlice = createSlice({
  name: 'targetCharacters',
  initialState: {
    value: []
  },
  reducers: {
    // Sets the target characters based on which are active from the character list
    setTargetCharacters: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setTargetCharacters } = targetCharactersSlice.actions;
export default targetCharactersSlice.reducer;
