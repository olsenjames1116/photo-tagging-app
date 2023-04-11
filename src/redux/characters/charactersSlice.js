import { createSlice } from '@reduxjs/toolkit';
import { Deadpool, Kang, Rocket } from '../../images/index';
import uniqid from 'uniqid';

// Represents the target characters for the game
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
    // When a character is found, remove them as an active character
    foundCharacter: (state, action) => {
      const index = state.value.findIndex(
        (character) => character.name.toLowerCase() === action.payload
      );

      state.value[index] = { ...state.value[index], active: false };
    }
  }
});

export const { foundCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
