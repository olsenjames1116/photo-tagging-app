import { createSlice } from '@reduxjs/toolkit';
import { Deadpool, Kang, Rocket } from '../../images/index';

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    value: [
      {
        name: 'Deadpool',
        image: Deadpool,
        active: true
      },
      {
        name: 'Kang',
        image: Kang,
        active: true
      },
      {
        name: 'Rocket',
        image: Rocket,
        active: true
      }
    ]
  },
  reducers: {
    foundCharacter: (state, action) => {}
  }
});

export const { foundCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
