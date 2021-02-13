import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNsO1Md6GqmF-CdN8JSMcfV8FZnCtiqGc",
    authDomain: "netflix-clone-made-by-amit.firebaseapp.com",
    projectId: "netflix-clone-made-by-amit",
    storageBucket: "netflix-clone-made-by-amit.appspot.com",
    messagingSenderId: "323132898671",
    appId: "1:323132898671:web:219bff0421953f0f16bc9a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth };
  export default db;