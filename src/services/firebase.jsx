import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_GKEY,
  authDomain: 'webby-chatty.firebaseapp.com',
  databaseURL: 'https://webby-chatty.firebaseio.com',
};

firebase.initializeApp(config);

export const { auth } = firebase;
export const db = firebase.database();
