import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementWatch } from '../../redux/stopwatch/stopwatchSlice';

export default function Stopwatch() {
  const stopwatch = useSelector((state) => state.stopwatch.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => dispatch(incrementWatch()), 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="stopWatch">{stopwatch}</div>;
}
