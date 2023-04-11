import React from 'react';
import { useSelector } from 'react-redux';
import Character from './Character';

// Represents the target characters that the user is to look for
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
