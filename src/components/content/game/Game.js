import React from 'react';
import { Wimmelbilder } from '../../../images/index';
import TargetBox from './TargetBox';
import { useSelector, useDispatch } from 'react-redux';
import { clickOnImage } from '../../../redux/imageClicked/imageClickedSlice';
import { setX, setY } from '../../../redux/targetCoordinates/targetCoordinatesSlice';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

export default function Game() {
  const dispatch = useDispatch();

  function getCoordinates(event) {
    const { left, top } = event.target.getBoundingClientRect();
    const { clientX, clientY } = event;
    const x = Math.round(clientX - left);
    const y = Math.round(clientY - top);

    return { x, y };
  }

  function clickImage(event) {
    const { x, y } = getCoordinates(event);

    dispatch(setX(x));
    dispatch(setY(y));

    dispatch(clickOnImage());
  }

  const imgStyle = {
    width: '1000px'
  };

  const imageClicked = useSelector((state) => state.imageClicked.value);

  return (
    <div className="game">
      <img
        style={imgStyle}
        src={Wimmelbilder}
        alt="A detailed image with various Marvel characters"
        onClick={(event) => clickImage(event)}
      />
      {imageClicked && <TargetBox />}
    </div>
  );
}
