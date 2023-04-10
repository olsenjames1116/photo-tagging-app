import React from 'react';
import Scores from './Scores';
import PlayAgainButton from './PlayAgainButton';
import '../../../styles/content/exit/ExitPopup.css';

export default function ExitPopup() {
  return (
    <div className="exitPopup">
      <Scores />
      <PlayAgainButton />
    </div>
  );
}
