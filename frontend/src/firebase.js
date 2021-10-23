import firebase from "firebase";
import '@firebase/auth';
import '@firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZWAKl9DjkICOkj1tVbfzN5rVFQnyoe_4",
  authDomain: "donodaddy-kbigs.firebaseapp.com",
  projectId: "donodaddy-kbigs",
  storageBucket: "donodaddy-kbigs.appspot.com",
  messagingSenderId: "1066793748877",
  appId: "1:1066793748877:web:ede61671b61d32ea9395c4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
