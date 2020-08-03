import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDux43OJIYyYW7jZuwAk5QvrNHaiyC2mcA',
  authDomain: 'webby-chatty.firebaseapp.com',
  databaseURL: 'https://webby-chatty.firebaseio.com',
};

firebase.initializeApp(config);

export const { auth } = firebase;
export const db = firebase.database();
