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

  // function removeCurrentTargetBox() {
  //   const currentTargetBox = document.querySelector('div.targetBox');
  //   const currentTargetList = document.querySelector('div.targetList');
  //   currentTargetBox && currentTargetBox.remove() && currentTargetList.remove();
  // }

  // function createTargetList() {
  //   const targetList = document.createElement('div');
  //   targetList.classList.add('targetList');

  //   Object.assign(targetList.style, {
  //     position: 'absolute',
  //     top: '104px',
  //     left: '-5px',
  //     border: '5px solid blue',
  //     height: '100px',
  //     width: '100px'
  //   });

  //   const targetBox = document.querySelector('div.targetBox');
  //   targetBox.appendChild(targetList);
  // }

  // function createTargetBox(x, y) {
  //   // removeCurrentTargetBox();
  //   // return <TargetBox x={x} y={y} />;
  //   // const targetBox = document.createElement('div');
  //   // targetBox.classList.add('targetBox');
  //   // Object.assign(targetBox.style, {
  //   //   position: 'absolute',
  //   //   zIndex: '100',
  //   //   top: `${y - 50}px`,
  //   //   left: `${x - 50}px`,
  //   //   width: '100px',
  //   //   height: '100px',
  //   //   border: '5px solid black'
  //   // });
  //   // document
  //   //   .querySelector('div.content')
  //   //   .insertBefore(targetBox, document.querySelector('div.content > img'));
  //   // createTargetList();
  // }

  function getCoordinates(event) {
    const { left, top } = event.target.getBoundingClientRect();
    const { clientX, clientY } = event;
    const x = Math.round(clientX - left);
    const y = Math.round(clientY - top);

    console.log(`x: ${x} y: ${y}`);

    // createTargetBox(x, y);

    return { x, y };
  }

  async function validateCoordinates(x, y) {
    const docRef = doc(db, 'characterCoordinates', 'V6xqpoYXALe8KRYZaHTw');
    const docSnap = await getDoc(docRef);
    const characterCoordinates = docSnap.data();

    for (const character in characterCoordinates) {
      const correctCoordinates = characterCoordinates[character];

      const validXCoordinates = [correctCoordinates[0] - 50, correctCoordinates[0] + 50];
      const validYCoordinates = [correctCoordinates[1] - 50, correctCoordinates[1] + 50];
      console.log(validXCoordinates, validYCoordinates);

      if (
        x > validXCoordinates[0] &&
        x < validXCoordinates[1] &&
        y > validYCoordinates[0] &&
        y < validYCoordinates[1]
      ) {
        console.log('valid');
        break;
      }
    }
  }

  function clickImage(event) {
    const { x, y } = getCoordinates(event);

    dispatch(setX(x));
    dispatch(setY(y));

    dispatch(clickOnImage());

    validateCoordinates(x, y);
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
