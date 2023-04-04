import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ character }) {
  const style = {
    height: '100px',
    width: 'auto'
  };

  return (
    <li key={character.id}>
      <img style={style} src={character.image} alt={character.name} />
      <span>{character.name}</span>
    </li>
  );
}

Character.propTypes = {
  character: PropTypes.object
};
