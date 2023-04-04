import React from 'react';
import { Wimmelbilder } from '../../../images/index';

export default function Game() {
  const style = {
    width: '100vw'
  };

  return (
    <img style={style} src={Wimmelbilder} alt="A detailed image with various Marvel characters" />
  );
}
