import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playGame } from '../../../redux/welcome/welcomeSlice';
import { loadGame } from '../../../redux/game/gameSlice';

export default function StartButton() {
  const dispatch = useDispatch();
  // const welcome = useSelector((state) => state.welcome.value);

  //   useEffect(() => {
  //     console.log(welcome);
  //   }, [welcome]);

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
