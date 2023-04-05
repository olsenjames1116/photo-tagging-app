import { createSlice } from '@reduxjs/toolkit';

export const targetCoordinatesSlice = createSlice({
  name: 'targetCoordinates',
  initialState: {
    x: 0,
    y: 0
  },
  reducers: {
    setX: (state, action) => {
      return {
        ...state,
        x: action.payload
      };
    },
    setY: (state, action) => {
      return {
        ...state,
        y: action.payload
      };
    }
  }
});

export const { setX, setY } = targetCoordinatesSlice.actions;
export default targetCoordinatesSlice.reducer;
