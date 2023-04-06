import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTargetCharacters } from '../../../redux/targetCharacters/targetCharactersSlice';

export default function TargetList() {
  const characters = useSelector((state) => state.characters.value);
  const targetCharacters = useSelector((state) => state.targetCharacters.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const activeCharacters = characters.filter((character) => character.active);

    dispatch(setTargetCharacters(activeCharacters));
  }, [characters]);

  const style = {
    position: 'absolute',
    top: '104px',
    left: '-5px',
    backgroundColor: 'blue',
    height: '100px',
    width: '100px',
    margin: '0'
  };

  return (
    <ul style={style} className="targetList">
      {targetCharacters.map((target) => (
        <li key={target.id}>{target.name}</li>
      ))}
    </ul>
  );
}
