import React from 'react';
import { Wimmelbilder } from '../../../images/index';

export default function Game() {
  const imgStyle = {
    width: '1000px'
  };

  function createTargetBox(x, y) {
    const currentTargetBox = document.querySelector('div.targetBox');
    currentTargetBox && currentTargetBox.remove();

    const targetBox = document.createElement('div');
    targetBox.classList.add('targetBox');

    Object.assign(targetBox.style, {
      position: 'absolute',
      zIndex: '100',
      top: `${y - 50}px`,
      left: `${x - 50}px`,
      width: '100px',
      height: '100px',
      border: '5px solid black'
    });

    document
      .querySelector('div.content')
      .insertBefore(targetBox, document.querySelector('div.content > img'));
  }

  function getCoordinates(event) {
    const { left, top } = event.target.getBoundingClientRect();
    const { clientX, clientY } = event;
    const x = clientX - left;
    const y = clientY - top;

    console.log(event);
    console.log(`clientX: ${clientX} clientY: ${clientY} x: ${x} y: ${y}`);

    createTargetBox(x, y);
  }

  return (
    <img
      style={imgStyle}
      src={Wimmelbilder}
      alt="A detailed image with various Marvel characters"
      onClick={(event) => getCoordinates(event)}
    />
  );
}
