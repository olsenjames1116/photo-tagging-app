import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TargetList from './TargetList';

export default function TargetBox() {
  const { x, y } = useSelector((state) => state.targetCoordinates);

  const style = {
    position: 'absolute',
    zIndex: '100',
    top: `${y - 50}px`,
    left: `${x - 50}px`,
    width: '100px',
    height: '100px',
    border: '5px solid black',
    color: 'white'
  };

  return (
    <div style={style} className="targetBox">
      <TargetList />
    </div>
  );
}

TargetBox.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};
