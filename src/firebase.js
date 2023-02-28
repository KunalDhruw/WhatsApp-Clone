import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyABc76AvFVhsPL5jty1Gf9ZsA3VldBHXXQ",
  authDomain: "whatsapp-clone-2a1b6.firebaseapp.com",
  projectId: "whatsapp-clone-2a1b6",
  storageBucket: "whatsapp-clone-2a1b6.appspot.com",
  messagingSenderId: "241573495476",
  appId: "1:241573495476:web:d0ff3f593920693cf40de1",
  measurementId: "G-DECZ9M5F1Q"
};

  //this special line of code connects everything
  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  //this is for database connection
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;