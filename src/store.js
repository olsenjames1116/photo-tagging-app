import { configureStore } from '@reduxjs/toolkit';
import welcomeReducer from './redux/welcome/welcomeSlice';
import charactersReducer from './redux/characters/charactersSlice';
import gameReducer from './redux/game/gameSlice';

export default configureStore({
  reducer: {
    welcome: welcomeReducer,
    characters: charactersReducer,
    game: gameReducer
  }
});
