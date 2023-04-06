import React from 'react';
import PageCover from './PageCover';
import { useSelector } from 'react-redux';
import Popup from './Popup';
import Game from './game/Game';

export default function Content() {
  const welcome = useSelector((state) => state.welcome.value);
  const game = useSelector((state) => state.game.value);
  const exit = useSelector((state) => state.exit.value);

  const style = {
    position: 'relative'
  };

  return (
    <div className="content" style={style}>
      {welcome && <PageCover />}
      {welcome && <Popup />}
      {game && <Game />}
      {exit && <PageCover />}
      {exit && <Popup />}
    </div>
  );
}
