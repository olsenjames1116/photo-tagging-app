import React from 'react';
import Author from './Author';
import Sources from './Sources';
import { clickOffImage } from '../../redux/imageClicked/imageClickedSlice';
import { useDispatch } from 'react-redux';

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(clickOffImage())} className="footer">
      <Author />
      <Sources />
    </div>
  );
}
