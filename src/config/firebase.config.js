//import firebase from 'firebase/compat/app';
//import "firebase/compat/auth"

import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAu7aoemOUGUibmb64VV7fzDV679gICfG0",
  authDomain: "rec-quiz-project.firebaseapp.com",
  projectId: "rec-quiz-project",
  storageBucket: "rec-quiz-project.appspot.com",
  messagingSenderId: "704821870677",
  appId: "1:704821870677:web:7951d34966ddbdc16594dc",
  measurementId: "G-KNW7DYG4ZK"
};

const app = initializeApp(firebaseConfig)
const Auth= getAuth(app)



export {app,Auth}