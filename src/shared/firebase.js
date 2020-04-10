import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB4oFj9fYFuXVtY6Q7l8ukViExO-ZoXd8w",
  authDomain: "scheduler-bd460.firebaseapp.com",
  databaseURL: "https://scheduler-bd460.firebaseio.com",
  projectId: "scheduler-bd460",
  storageBucket: "scheduler-bd460.appspot.com",
  messagingSenderId: "28894335281",
  appId: "1:28894335281:web:18c7c1d22aeb187559a010",
  measurementId: "G-7XH5BKM1Y3"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
