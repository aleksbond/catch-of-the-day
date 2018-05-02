import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD4Ne5JTV0K9X9mI1wZ-R8do46sFaeh4_U",
    authDomain: "catch-of-the-day-aleksbond.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-aleksbond.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
