import React from 'react';
import { useSelector } from 'react-redux';

// Displays the player's score formatted to have a stopwatch appearance
export default function PlayerTime() {
  const stopwatch = useSelector((state) => state.stopwatch.value);

  return (
    <div className="playerTime">
      <h2>Your Time:</h2>
      <div className="time">
        <span className="minutes">
          {('0' + Math.floor((stopwatch / 60000) % 60)).slice(-2) + ':'}
        </span>
        <span className="seconds">{('0' + Math.floor((stopwatch / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
  );
}
