import React from 'react';
import { useSelector } from 'react-redux';
import Character from '../Character';

export default function Targets() {
  const characters = useSelector((state) => state.characters.value);

  return (
    <ul className="targets">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </ul>
  );
}
