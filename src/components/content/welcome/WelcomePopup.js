import React from 'react';
import Directions from './Directions';
import Targets from '../Targets';
import StartButton from './StartButton';
import '../../../styles/content/welcome/WelcomePopup.css';

// Displays the welcome screen on the app loading
export default function WelcomePopup() {
  return (
    <div className="welcomePopup">
      <Directions />
      <Targets />
      <StartButton />
    </div>
  );
}
