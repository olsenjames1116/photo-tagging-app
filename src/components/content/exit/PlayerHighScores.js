import React, { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { setHighScores } from '../../../redux/highScores/highScoresSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function PlayerHighScores() {
  const highScores = useSelector((state) => state.highScores.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(highScores);
  }, [highScores]);

  async function getHighScores() {
    const docRef = doc(db, 'highScores', 'yIOvANs0BdSg7JFy2VW5');
    const docSnap = await getDoc(docRef);
    const highScoresData = docSnap.data();
    console.log(highScoresData);

    dispatch(setHighScores(highScoresData));
  }

  getHighScores();

  return <ol className="playerHighScores">{}</ol>;
}
