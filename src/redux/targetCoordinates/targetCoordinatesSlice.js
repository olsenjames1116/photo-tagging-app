import { createSlice } from '@reduxjs/toolkit';

// Represents the coordinates clicked on by the user in the image
export const targetCoordinatesSlice = createSlice({
  name: 'targetCoordinates',
  initialState: {
    x: 0,
    y: 0
  },
  reducers: {
    // Sets the x-coordinate when the user clicks on the main image
    setX: (state, action) => {
      return {
        ...state,
        x: action.payload
      };
    },
    // Sets the y-coordinate when the user clicks on the main image
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
