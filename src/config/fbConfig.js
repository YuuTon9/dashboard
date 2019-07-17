import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDJ3Me5SH79BGiUDtk5oCkT0JXMAS2QtRM",
    authDomain: "orbital-producktive.firebaseapp.com",
    databaseURL: "https://orbital-producktive.firebaseio.com",
    projectId: "orbital-producktive",
    storageBucket: "orbital-producktive.appspot.com",
    messagingSenderId: "685589223310",
    appId: "1:685589223310:web:6eb843c5ae842c39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })
  
  export default firebase;