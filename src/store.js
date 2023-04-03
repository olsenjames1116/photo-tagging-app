import { configureStore } from '@reduxjs/toolkit';
import welcomeReducer from './features/welcome/welcomeSlice';

export default configureStore({
  reducer: {
    welcome: welcomeReducer
  }
});
