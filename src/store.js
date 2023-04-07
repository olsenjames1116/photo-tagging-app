import { configureStore } from '@reduxjs/toolkit';
import welcomeReducer from './redux/welcome/welcomeSlice';
import charactersReducer from './redux/characters/charactersSlice';
import gameReducer from './redux/game/gameSlice';
import imageClickedReducer from './redux/imageClicked/imageClickedSlice';
import targetCoordinatesReducer from './redux/targetCoordinates/targetCoordinatesSlice';
import targetCharactersReducer from './redux/targetCharacters/targetCharactersSlice';
import exitReducer from './redux/exit/exitSlice';
import highScoresReducer from './redux/highScores/highScoresSlice';

export default configureStore({
  reducer: {
    welcome: welcomeReducer,
    characters: charactersReducer,
    game: gameReducer,
    imageClicked: imageClickedReducer,
    targetCoordinates: targetCoordinatesReducer,
    targetCharacters: targetCharactersReducer,
    exit: exitReducer,
    highScores: highScoresReducer
  }
});
