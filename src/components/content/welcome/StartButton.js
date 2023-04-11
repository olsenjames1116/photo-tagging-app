import React from 'react';
import { useDispatch } from 'react-redux';
import { playGame } from '../../../redux/welcome/welcomeSlice';
import { loadGame } from '../../../redux/game/gameSlice';

// Displays the start button on the welcome screen
export default function StartButton() {
  const dispatch = useDispatch();

  // Begins the game when the start button has been clicked
  function startGame() {
    dispatch(playGame());
    dispatch(loadGame());
  }

  return (
    <button type="button" onClick={() => startGame()}>
      Start
    </button>
  );
}
