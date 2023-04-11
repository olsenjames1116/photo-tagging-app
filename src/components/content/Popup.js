import React from 'react';
import WelcomePopup from './welcome/WelcomePopup';
import { useSelector } from 'react-redux';
import ExitPopup from './exit/ExitPopup';
import '../../styles/content/Popup.css';

// Represents a popup that appears on the welcome and the final screen
export default function Popup() {
  const welcome = useSelector((state) => state.welcome.value);
  const exit = useSelector((state) => state.exit.value);

  return (
    <div className="popup">
      {welcome && <WelcomePopup />}
      {exit && <ExitPopup />}
    </div>
  );
}
