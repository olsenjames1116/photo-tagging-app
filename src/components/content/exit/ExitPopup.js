import React from 'react';
import Scores from './Scores';
import PlayAgainButton from './PlayAgainButton';
import '../../../styles/content/exit/ExitPopup.css';

// Represents the final popup that displays to the user displaying their score and other high scores
export default function ExitPopup() {
  return (
    <div className="exitPopup">
      <Scores />
      <PlayAgainButton />
    </div>
  );
}
