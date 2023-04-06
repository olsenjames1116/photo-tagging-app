import { createSlice } from '@reduxjs/toolkit';

export const targetCharactersSlice = createSlice({
  name: 'targetCharacters',
  initialState: {
    value: []
  },
  reducers: {
    setTargetCharacters: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setTargetCharacters } = targetCharactersSlice.actions;
export default targetCharactersSlice.reducer;
