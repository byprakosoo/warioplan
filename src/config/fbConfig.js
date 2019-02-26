 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAdkN9F0Kqn-sc9SzBKP6lLvRTp3PMDAAU",
    authDomain: "mbokdjah-warioplan.firebaseapp.com",
    databaseURL: "https://mbokdjah-warioplan.firebaseio.com",
    projectId: "mbokdjah-warioplan",
    storageBucket: "mbokdjah-warioplan.appspot.com",
    messagingSenderId: "51871297751"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});
  
  export default firebase