import React from 'react';
import { Wimmelbilder } from '../../../images/index';
import TargetBox from './TargetBox';
import { useSelector, useDispatch } from 'react-redux';
import { clickOnImage } from '../../../redux/imageClicked/imageClickedSlice';
import { setX, setY } from '../../../redux/targetCoordinates/targetCoordinatesSlice';
import '../../../styles/content/game/Game.css';

// Displays the image and targeting box to run the game
export default function Game() {
  const imageClicked = useSelector((state) => state.imageClicked.value);
  const dispatch = useDispatch();

  // Gets coordinates from each click on the image relative to the image
  function getCoordinates(event) {
    const { left, top } = event.target.getBoundingClientRect();
    const { clientX, clientY } = event;
    const x = Math.round(clientX - left);
    const y = Math.round(clientY - top);

    return { x, y };
  }

  /* Reached when the image is clicked. Triggers the appropriate function, sets the coordinates state 
   and sets state to show an image has been clicked */
  function clickImage(event) {
    const { x, y } = getCoordinates(event);

    dispatch(setX(x));
    dispatch(setY(y));

    dispatch(clickOnImage());
  }

  return (
    <div className="game">
      <img
        src={Wimmelbilder}
        alt="A detailed image with various Marvel characters"
        onClick={(event) => clickImage(event)}
      />
      {imageClicked && <TargetBox />}
    </div>
  );
}
