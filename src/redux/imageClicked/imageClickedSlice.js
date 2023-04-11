import { createSlice } from '@reduxjs/toolkit';

// Displays the target box if the image has been clicked on or hides it if it has been clicked off of
export const imageClickedSlice = createSlice({
  name: 'imageClicked',
  initialState: {
    value: false
  },
  reducers: {
    // The image has been clicked, display the target box
    clickOnImage: (state) => {
      state.value = true;
    },
    // The image has been clicked off of, hide the target box
    clickOffImage: (state) => {
      state.value = false;
    }
  }
});

export const { clickOnImage, clickOffImage } = imageClickedSlice.actions;
export default imageClickedSlice.reducer;
