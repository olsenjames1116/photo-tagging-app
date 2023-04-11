import React from 'react';
import PageCover from './PageCover';
import { useSelector } from 'react-redux';
import Popup from './Popup';
import Game from './game/Game';

// Represents the main body of the app. Acts as a router to direct the user based on what phase the user is on
export default function Content() {
  const welcome = useSelector((state) => state.welcome.value);
  const game = useSelector((state) => state.game.value);
  const exit = useSelector((state) => state.exit.value);

  return (
    <div className="content">
      {welcome && <PageCover />}
      {welcome && <Popup />}
      {game && <Game />}
      {exit && <PageCover />}
      {exit && <Popup />}
    </div>
  );
}
