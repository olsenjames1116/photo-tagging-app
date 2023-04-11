import { configureStore } from '@reduxjs/toolkit';
import {
  welcomeReducer,
  charactersReducer,
  gameReducer,
  imageClickedReducer,
  targetCoordinatesReducer,
  targetCharactersReducer,
  exitReducer,
  highScoresReducer,
  stopwatchReducer
} from './redux/index';

export default configureStore({
  reducer: {
    welcome: welcomeReducer,
    characters: charactersReducer,
    game: gameReducer,
    imageClicked: imageClickedReducer,
    targetCoordinates: targetCoordinatesReducer,
    targetCharacters: targetCharactersReducer,
    exit: exitReducer,
    highScores: highScoresReducer,
    stopwatch: stopwatchReducer
  }
});
