import React from 'react';
import WelcomePopup from './welcome/WelcomePopup';
import { useSelector } from 'react-redux';

export default function Popup() {
  const welcome = useSelector((state) => state.welcome.value);

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
    </div>
  );
}
