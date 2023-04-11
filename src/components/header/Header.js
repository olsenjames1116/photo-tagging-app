import React from 'react';
import Title from './Title';
import { useSelector, useDispatch } from 'react-redux';
import Targets from '../content/Targets';
import { clickOffImage } from '../../redux/imageClicked/imageClickedSlice';
import Stopwatch from './Stopwatch';
import '../../styles/header/Header.css';

/* Represents the header at the top of the screen that displays different things based on what phase of the app the 
user is on */
export default function Header() {
  const welcome = useSelector((state) => state.welcome.value);
  const game = useSelector((state) => state.game.value);
  const exit = useSelector((state) => state.exit.value);

  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(clickOffImage())} className="header">
      {welcome && <Title />}
      {game && <Targets />}
      {game && <Stopwatch />}
      {exit && <Title />}
    </div>
  );
}
