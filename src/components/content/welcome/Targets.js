import React from 'react';
import { useSelector } from 'react-redux';

export default function Targets() {
  const style = {
    height: '100px',
    width: 'auto'
  };

  const characters = useSelector((state) => state.characters.value);

  return (
    <ul className="targets">
      {characters.map((character) => {
        return (
          <li key={character.id}>
            <img style={style} src={character.image} alt={character.name} />
            <span>{character.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
