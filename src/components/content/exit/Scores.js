import React from 'react';
import PlayerTime from './PlayerTime';
import PlayerForm from './PlayerForm';
import HighScores from './HighScores';

// Displays the scores for the player and top high scores on the final page
export default function Scores() {
  return (
    <div className="scores">
      <PlayerTime />
      <PlayerForm />
      <HighScores />
    </div>
  );
}
