import React from 'react';
import WelcomePopup from './welcome/WelcomePopup';
import { useSelector } from 'react-redux';
import ExitPopup from './exit/ExitPopup';

export default function Popup() {
  const welcome = useSelector((state) => state.welcome.value);
  const exit = useSelector((state) => state.exit.value);

  const style = {
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: '100',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  };

  return (
    <div className="popup" style={style}>
      {welcome && <WelcomePopup />}
      {exit && <ExitPopup />}
    </div>
  );
}
