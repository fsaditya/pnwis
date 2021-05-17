import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const clientCredentials = {
  apiKey: "AIzaSyAWPJJBSlFc4XxsiRWS-riiAqRbGJpy9Yc",
  authDomain: "panwis-2021-c3b1b.firebaseapp.com",
  databaseURL: 'https://panwis-2021-c3b1b-default-rtdb.firebaseio.com/',
  projectId: "panwis-2021-c3b1b",
  storageBucket: "panwis-2021-c3b1b.appspot.com",
  messagingSenderId: "311156957954",
  appId: "1:311156957954:web:8138793fe8455869be181b",
  measurementId: "G-235RVGC6K9"
};

// const clientCredentials = {
//   apiKey: 'AIzaSyCeftrxnIi2eXCQYBvhY9SLOH5HeagGI9I',
//   authDomain: 'kadep-panwis.firebaseapp.com',
//   databaseURL: 'https://kadep-panwis.firebaseio.com',
//   projectId: 'kadep-panwis',
//   storageBucket: 'kadep-panwis.appspot.com',
//   messagingSenderId: '586107819074',
//   appId: '1:586107819074:web:2e9750cebbb42d0fc709db',
//   measurementId: 'G-QSS841MR55',
// };

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
}

export default firebase;
