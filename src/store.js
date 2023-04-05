import { configureStore } from '@reduxjs/toolkit';
import welcomeReducer from './redux/welcome/welcomeSlice';
import charactersReducer from './redux/characters/charactersSlice';
import gameReducer from './redux/game/gameSlice';
import imageClickedReducer from './redux/imageClicked/imageClickedSlice';
import targetCoordinatesReducer from './redux/targetCoordinates/targetCoordinatesSlice';

export default configureStore({
  reducer: {
    welcome: welcomeReducer,
    characters: charactersReducer,
    game: gameReducer,
    imageClicked: imageClickedReducer,
    targetCoordinates: targetCoordinatesReducer
  }
});
