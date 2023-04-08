import React from 'react';
import PropTypes from 'prop-types';

export default function Score({ highScore }) {
  return (
    <li key={highScore.id}>
      <span>{highScore.name}</span>
      <span>{highScore.time}</span>
    </li>
  );
}

Score.propTypes = {
  highScore: PropTypes.object
};
