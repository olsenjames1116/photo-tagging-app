import React from 'react';
import Author from './Author';
import Sources from './Sources';
import { clickOffImage } from '../../redux/imageClicked/imageClickedSlice';
import { useDispatch } from 'react-redux';
import '../../styles/footer/Footer.css';

// Represents the footer on the bottom of the screen
export default function Footer() {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(clickOffImage())} className="footer">
      <Author />
      <Sources />
    </div>
  );
}
