import { configureStore } from '@reduxjs/toolkit';
import welcomeReducer from './redux/welcome/welcomeSlice';
import charactersReducer from './redux/characters/charactersSlice';

export default configureStore({
  reducer: {
    welcome: welcomeReducer,
    characters: charactersReducer
  }
});
