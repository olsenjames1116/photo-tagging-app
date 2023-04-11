import React from 'react';
import PropTypes from 'prop-types';

// Displays the character image and info for each target character
export default function Character({ character }) {
  return (
    <li key={character.id}>
      <img src={character.image} alt={character.name} />
      <span>{character.name}</span>
    </li>
  );
}

Character.propTypes = {
  character: PropTypes.object
};
