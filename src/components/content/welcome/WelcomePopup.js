import React from 'react';
import Directions from './Directions';
import Targets from './Targets';

export default function WelcomePopup() {
  return (
    <div className="welcomePopup">
      <Directions />
      <Targets />
    </div>
  );
}
