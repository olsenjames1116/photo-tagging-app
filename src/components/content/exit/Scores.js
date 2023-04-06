import React from 'react';
import PlayerTime from './PlayerTime';
import PlayerForm from './PlayerForm';

export default function Scores() {
  return (
    <div className="scores">
      <PlayerTime />
      <PlayerForm />
    </div>
  );
}
