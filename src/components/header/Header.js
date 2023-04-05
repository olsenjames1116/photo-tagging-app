import React from 'react';
import Title from './Title';
import { useSelector, useDispatch } from 'react-redux';
import Targets from '../content/welcome/Targets';
import { clickOffImage } from '../../redux/imageClicked/imageClickedSlice';

export default function Header() {
  const welcome = useSelector((state) => state.welcome.value);
  const game = useSelector((state) => state.game.value);

  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(clickOffImage())} className="header">
      {welcome && <Title />}
      {game && <Targets />}
    </div>
  );
}
