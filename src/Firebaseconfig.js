import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJMkX9vwLGrIb36LjgGYfyv0q4Fr5jRBY",
  authDomain: "april-assignment.firebaseapp.com",
  projectId: "april-assignment",
  storageBucket: "april-assignment.appspot.com",
  messagingSenderId: "858973762991",
  appId: "1:858973762991:web:0168369b29c66ca819eb5a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};