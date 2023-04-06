import React from 'react';
import Scores from './Scores';
import PlayAgainButton from './PlayAgainButton';

export default function ExitPopup() {
  return (
    <div className="exitPopup">
      <Scores />
      <PlayAgainButton />
    </div>
  );
}
