import React from 'react';
import Directions from './Directions';
import Targets from '../Targets';
import StartButton from './StartButton';
import '../../../styles/content/welcome/WelcomePopup.css';

export default function WelcomePopup() {
  return (
    <div className="welcomePopup">
      <Directions />
      <Targets />
      <StartButton />
    </div>
  );
}
