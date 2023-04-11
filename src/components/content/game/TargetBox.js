import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TargetList from './TargetList';

// Displays the target box that appears when a user clicks on the main image
export default function TargetBox() {
  const { x, y } = useSelector((state) => state.targetCoordinates);

  // Positions the targeting box relative to the user's click
  const style = {
    top: `${y - 50}px`,
    left: `${x - 50}px`
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
