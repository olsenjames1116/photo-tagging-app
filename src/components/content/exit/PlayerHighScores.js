import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { setHighScores } from '../../../redux/highScores/highScoresSlice';
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';

export default function PlayerHighScores() {
  const highScores = useSelector((state) => state.highScores.value);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const collectionRef = collection(db, 'highScores');
      const collectionSnap = await getDocs(collectionRef);
      collectionSnap.forEach((document) =>
        console.log(document.data()['name'], document.data()['time'])
      );
    }

    fetchData();
  }, []);

  return <ol className="playerHighScores">{}</ol>;
}
