import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playGame } from '../../../redux/welcome/welcomeSlice';

export default function StartButton() {
  const dispatch = useDispatch();
  const welcome = useSelector((state) => state.welcome.value);

  useEffect(() => {
    console.log(welcome);
  }, [welcome]);

  return (
    <button type="button" onClick={() => dispatch(playGame())}>
      Start
    </button>
  );
}
