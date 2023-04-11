import React, { useEffect, useRef } from 'react';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import { setHighScores } from '../../../redux/highScores/highScoresSlice';
import { useSelector, useDispatch } from 'react-redux';
import Score from './Score';

// Displays the top high scores to the final page
export default function PlayerHighScores() {
  const highScores = useSelector((state) => state.highScores.value);
  const dispatch = useDispatch();

  // Ensures that data is not fetched and written to state twice on mount
  const loadScores = useRef(true);

  // Fetch top high scores on component mount
  useEffect(() => {
    async function fetchData() {
      const collectionRef = collection(db, 'highScores');
      const collectionQuery = query(collectionRef, orderBy('time'), limit(10));
      const collectionSnap = await getDocs(collectionQuery);
      // Write the top high scores to the highScores state
      collectionSnap.forEach((document) => {
        dispatch(setHighScores([document.id, document.data()]));
      });
    }

    // Ensures that data is not fetched and written to state twice on mount
    if (loadScores.current) {
      loadScores.current = false;
      fetchData();
    }
  }, []);

  return (
    <ol className="playerHighScores">
      {highScores.map((highScore) => (
        <Score key={highScore.id} highScore={highScore} />
      ))}
    </ol>
  );
}
