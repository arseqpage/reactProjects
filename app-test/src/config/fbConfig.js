import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCjjSMPe9B1bZwC1F96FgZwqfILiDBK5vg',
  authDomain: 'arseqplan.firebaseapp.com',
  projectId: 'arseqplan',
  storageBucket: 'arseqplan.appspot.com',
  messagingSenderId: '577884620187',
  appId: '1:577884620187:web:620573c897f21d68668d3e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
