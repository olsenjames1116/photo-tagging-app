import { createSlice } from '@reduxjs/toolkit';

export const imageClickedSlice = createSlice({
  name: 'imageClicked',
  initialState: {
    value: false
  },
  reducers: {
    clickOnImage: (state) => {
      state.value = true;
    },
    clickOffImage: (state) => {
      state.value = false;
    }
  }
});

export const { clickOnImage, clickOffImage } = imageClickedSlice.actions;
export default imageClickedSlice.reducer;
