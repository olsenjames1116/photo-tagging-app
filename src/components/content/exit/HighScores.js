import React from 'react';
import PlayerHighScores from './PlayerHighScores';

// Displays the top high scores that have been stored in firestore
export default function HighScores() {
  return (
    <div className="highScores">
      <h2>High Scores:</h2>
      <PlayerHighScores />
    </div>
  );
}
