import React from 'react';
import PlayerTime from './PlayerTime';
import PlayerForm from './PlayerForm';
import HighScores from './HighScores';

export default function Scores() {
  return (
    <div className="scores">
      <PlayerTime />
      <PlayerForm />
      <HighScores />
    </div>
  );
}
