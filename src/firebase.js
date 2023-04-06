// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAKQcUbrCDOqWoMb2rqGC2Dk6YLmvKwitE',
  authDomain: 'phototagging-f5b02.firebaseapp.com',
  projectId: 'phototagging-f5b02',
  storageBucket: 'phototagging-f5b02.appspot.com',
  messagingSenderId: '773685695839',
  appId: '1:773685695839:web:89cab2e99991f03704d2ea',
  measurementId: 'G-L2T6M2CLB1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
