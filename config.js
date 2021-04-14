import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDVy13w09F34lxM8noLDboam97HlYbZzQE",
  authDomain: "barter-system-7d915.firebaseapp.com",
  databaseURL: "https://barter-system-7d915-default-rtdb.firebaseio.com",
  projectId: "barter-system-7d915",
  storageBucket: "barter-system-7d915.appspot.com",
  messagingSenderId: "587804058920",
  appId: "1:587804058920:web:0d230c63a0112e0ec25c1d",
  measurementId: "G-HWQNF5EYGE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  export default firebase.firestore();
