import { createSlice } from '@reduxjs/toolkit';
import { Deadpool, Kang, Rocket } from '../../images/index';
import uniqid from 'uniqid';

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    value: [
      {
        id: uniqid(),
        name: 'Deadpool',
        image: Deadpool,
        active: true
      },
      {
        id: uniqid(),
        name: 'Kang',
        image: Kang,
        active: true
      },
      {
        id: uniqid(),
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