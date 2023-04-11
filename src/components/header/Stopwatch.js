import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementWatch } from '../../redux/stopwatch/stopwatchSlice';

// Represents the stopwatch that tracks the user's time during the game
export default function Stopwatch() {
  const stopwatch = useSelector((state) => state.stopwatch.value);
  const dispatch = useDispatch();

  // Starts the timer when the component mounts and increments the watch every second
  useEffect(() => {
    const intervalId = setInterval(() => dispatch(incrementWatch()), 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="stopWatch">
      <span className="minutes">
        {('0' + Math.floor((stopwatch / 60000) % 60)).slice(-2) + ':'}
      </span>
      <span className="seconds">{('0' + Math.floor((stopwatch / 1000) % 60)).slice(-2)}</span>
    </div>
  );
}
