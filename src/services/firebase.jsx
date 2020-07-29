import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyDux43OJIYyYW7jZuwAk5QvrNHaiyC2mcA",
  authDomain: "webby-chatty.firebaseapp.com",
  databaseURL: "https://webby-chatty.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.database();