import React from 'react';
import Directions from './Directions';
import Targets from './Targets';
import StartButton from './StartButton';

export default function WelcomePopup() {
  return (
    <div className="welcomePopup">
      <Directions />
      <Targets />
      <StartButton />
    </div>
  );
}
