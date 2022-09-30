import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDHTcTtBT9aim2Fw--wWhwKN2_m8Q6PO3o",
    authDomain: "afrikitch-site.firebaseapp.com",
    projectId: "afrikitch-site",
    storageBucket: "afrikitch-site.appspot.com",
    messagingSenderId: "401121850572",
    appId: "1:401121850572:web:9cd361da81f7910afa7e69"
  };

  //init firebase 

  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore= firebase.firestore()

  export {projectFirestore}