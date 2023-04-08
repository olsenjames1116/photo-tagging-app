import React, { useEffect, useRef } from 'react';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import { setHighScores } from '../../../redux/highScores/highScoresSlice';
import { useSelector, useDispatch } from 'react-redux';
import Score from './Score';

export default function PlayerHighScores() {
  const highScores = useSelector((state) => state.highScores.value);
  const dispatch = useDispatch();

  const loadScores = useRef(true);

  useEffect(() => {
    async function fetchData() {
      const collectionRef = collection(db, 'highScores');
      const collectionQuery = query(collectionRef, orderBy('time'), limit(10));
      const collectionSnap = await getDocs(collectionQuery);
      collectionSnap.forEach((document) => {
        dispatch(setHighScores([document.id, document.data()]));
      });
    }

    if (loadScores.current) {
      loadScores.current = false;
      fetchData();
    }
  }, []);

  useEffect(() => {
    console.table(highScores);
  }, [highScores]);

  return (
    <ol className="playerHighScores">
      {highScores.map((highScore) => (
        <Score key={highScore.id} highScore={highScore} />
      ))}
    </ol>
  );
}
