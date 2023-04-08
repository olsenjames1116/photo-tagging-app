import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useSelector } from 'react-redux';

export default function PlayerForm() {
  const stopwatch = useSelector((state) => state.stopwatch.value);
  const nameInput = document.querySelector('input#playerName');

  async function writeDocument(playerName) {
    const docRef = await addDoc(collection(db, 'highScores'), {
      name: playerName,
      time: stopwatch
    });
  }

  function displayErrorMessage(nameInput) {
    console.log('invalid submission');

    if (nameInput.validity.valueMissing) {
      nameInput.setCustomValidity('Please enter a name');
    }

    nameInput.reportValidity();
  }

  function checkValidity(event) {
    event.preventDefault();

    const form = document.querySelector('form');

    if (form.checkValidity()) {
      const playerName = nameInput.value;
      console.log(playerName, stopwatch);
      // writeDocument(playerName);
    } else {
      displayErrorMessage(nameInput);
    }
  }

  function resetValidity() {
    nameInput.setCustomValidity('');
  }

  return (
    <form noValidate>
      <label htmlFor="playerName">Enter your name:</label>
      <input
        id="playerName"
        type="text"
        placeholder="Thor"
        required
        maxLength="20"
        onChange={() => resetValidity()}
      />
      <button type="submit" onClick={(event) => checkValidity(event)}>
        Submit
      </button>
    </form>
  );
}
