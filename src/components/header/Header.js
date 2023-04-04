import React from 'react';
import Title from './Title';
import { useSelector } from 'react-redux';
import Targets from '../content/welcome/Targets';

export default function Header() {
  const welcome = useSelector((state) => state.welcome.value);
  const game = useSelector((state) => state.game.value);

  return (
    <div className="header">
      {welcome && <Title />}
      {game && <Targets />}
    </div>
  );
}
