import React from 'react';
import PageCover from './PageCover';
import { useSelector } from 'react-redux';
import Popup from './Popup';

export default function Content() {
  const welcome = useSelector((state) => state.welcome.value);
  return (
    <div className="content">
      {welcome && <PageCover />}
      {welcome && <Popup />}
    </div>
  );
}
