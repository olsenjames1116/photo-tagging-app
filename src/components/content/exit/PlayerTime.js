import React from 'react';
import { useSelector } from 'react-redux';

export default function PlayerTime() {
  const stopwatch = useSelector((state) => state.stopwatch.value);

  return (
    <div className="playerTime">
      <h2>Your Time:</h2>
      <p>{stopwatch}</p>
    </div>
  );
}
