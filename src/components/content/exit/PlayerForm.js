import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useSelector } from 'react-redux';

// Represents the form that appears in the final page for the user to record their score
export default function PlayerForm() {
  const stopwatch = useSelector((state) => state.stopwatch.value);

  // Writes the player's score to firestore
  async function writeDocument(playerName) {
    const docRef = await addDoc(collection(db, 'highScores'), {
      name: playerName,
      time: stopwatch
    });
  }

  // Displays a confirmation message after the user's information has been stored
  function confirmationMessage(form) {
    form.style.display = 'none';
    const confirmation = document.createElement('span');
    confirmation.classList.add('confirmation');
    confirmation.textContent = 'Your score has been saved!';
    const scores = document.querySelector('div.scores');
    scores.insertBefore(confirmation, document.querySelector('div.highScores'));
  }

  // Displays an error message when an invalid input has been used
  function displayErrorMessage() {
    console.log('invalid submission');
    const nameInput = document.querySelector('input#playerName');

    if (nameInput.validity.valueMissing) {
      nameInput.setCustomValidity('Please enter a name');
      nameInput.reportValidity();
    }
  }

  // Checks the validity of the input field when submitted
  function checkValidity(event) {
    event.preventDefault();

    const form = document.querySelector('form');
    const nameInput = document.querySelector('input#playerName');

    if (form.checkValidity()) {
      const playerName = nameInput.value;
      writeDocument(playerName);
      confirmationMessage(form);
    } else {
      displayErrorMessage();
    }
  }

  // Resets validity when the user changes the input field
  function resetValidity() {
    const nameInput = document.querySelector('input#playerName');
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
