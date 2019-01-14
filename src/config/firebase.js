import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database'

var config = {
  apiKey: "API_KEY",
  authDomain: "YOUR AUTH DOM",
  databaseURL: "DB URL",
  projectId: "ID",
  storageBucket: "",
  messagingSenderId: "ID"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
