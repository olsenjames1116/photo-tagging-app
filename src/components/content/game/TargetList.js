import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTargetCharacters } from '../../../redux/targetCharacters/targetCharactersSlice';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { foundCharacter } from '../../../redux/characters/charactersSlice';
import { exitGame } from '../../../redux/exit/exitSlice';
import { endGame } from '../../../redux/game/gameSlice';
import '../../../styles/content/game/Game.css';

// Displays the target list that appears when the user clicks on the main image
export default function TargetList() {
  const characters = useSelector((state) => state.characters.value);
  const targetCharacters = useSelector((state) => state.targetCharacters.value);
  const { x, y } = useSelector((state) => state.targetCoordinates);
  const dispatch = useDispatch();

  /* Sets the state for active characters when there has been a change to the characters state. This will be the 
  characters that is displayed to the user in the target list */
  useEffect(() => {
    const activeCharacters = characters.filter((character) => character.active);

    dispatch(setTargetCharacters(activeCharacters));

    // If there are not any more active characters, the game is over
    if (activeCharacters.length === 0) {
      dispatch(endGame());
      dispatch(exitGame());
    }
  }, [characters]);

  // Calls to firestore to validate the user's selected coordinates against the correct coordinates
  async function validateCoordinates(characterName) {
    const docRef = doc(db, 'characterCoordinates', 'V6xqpoYXALe8KRYZaHTw');
    const docSnap = await getDoc(docRef);
    const characterCoordinates = docSnap.data();

    const correctCoordinates = characterCoordinates[characterName];

    // A margin of error of 50 pixels in every direction is given to represent the reach of the targeting box
    const validXCoordinates = [correctCoordinates[0] - 50, correctCoordinates[0] + 50];
    const validYCoordinates = [correctCoordinates[1] - 50, correctCoordinates[1] + 50];

    // If the selected coordinates is within the range for the correct coordinates, the character has been found
    if (
      x > validXCoordinates[0] &&
      x < validXCoordinates[1] &&
      y > validYCoordinates[0] &&
      y < validYCoordinates[1]
    ) {
      dispatch(foundCharacter(characterName));
    }
  }

  // Called to check the image when the user has clicked on the image
  function checkImage(event) {
    const characterName = event.target.textContent.toLowerCase();

    validateCoordinates(characterName);
  }

  return (
    <ul className="targetList">
      {targetCharacters.map((target) => (
        <li key={target.id} onClick={(event) => checkImage(event)}>
          {target.name}
        </li>
      ))}
    </ul>
  );
}
