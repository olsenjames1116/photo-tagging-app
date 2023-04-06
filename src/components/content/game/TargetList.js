import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTargetCharacters } from '../../../redux/targetCharacters/targetCharactersSlice';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { foundCharacter } from '../../../redux/characters/charactersSlice';

export default function TargetList() {
  const characters = useSelector((state) => state.characters.value);
  const targetCharacters = useSelector((state) => state.targetCharacters.value);
  const { x, y } = useSelector((state) => state.targetCoordinates);
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

  async function validateCoordinates(characterName) {
    const docRef = doc(db, 'characterCoordinates', 'V6xqpoYXALe8KRYZaHTw');
    const docSnap = await getDoc(docRef);
    const characterCoordinates = docSnap.data();

    const correctCoordinates = characterCoordinates[characterName];

    const validXCoordinates = [correctCoordinates[0] - 50, correctCoordinates[0] + 50];
    const validYCoordinates = [correctCoordinates[1] - 50, correctCoordinates[1] + 50];

    if (
      x > validXCoordinates[0] &&
      x < validXCoordinates[1] &&
      y > validYCoordinates[0] &&
      y < validYCoordinates[1]
    ) {
      dispatch(foundCharacter(characterName));
    }
  }

  function checkImage(event) {
    const characterName = event.target.textContent.toLowerCase();

    validateCoordinates(characterName);
  }

  return (
    <ul style={style} className="targetList">
      {targetCharacters.map((target) => (
        <li key={target.id} onClick={(event) => checkImage(event)}>
          {target.name}
        </li>
      ))}
    </ul>
  );
}
