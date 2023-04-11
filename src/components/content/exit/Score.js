import React from 'react';
import PropTypes from 'prop-types';

// Displays the top high scores formatted to appear as a stopwatch
export default function Score({ highScore }) {
  return (
    <li key={highScore.id}>
      <span className="name">{highScore.name}</span>
      <div className="time">
        <span className="minutes">
          {('0' + Math.floor((highScore.time / 60000) % 60)).slice(-2) + ':'}
        </span>
        <span className="seconds">
          {('0' + Math.floor((highScore.time / 1000) % 60)).slice(-2)}
        </span>
      </div>
    </li>
  );
}

Score.propTypes = {
  highScore: PropTypes.object
};
