import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0YnxviKHycWbj_6KNMc3PqnERe1OpIwY",
  authDomain: "todolist-6c52d.firebaseapp.com",
  databaseURL: "https://todolist-6c52d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-6c52d",
  storageBucket: "todolist-6c52d.appspot.com",
  messagingSenderId: "655436696008",
  appId: "1:655436696008:web:879ea4e0f74209139298fd",
  measurementId: "G-EX75875NB8"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
