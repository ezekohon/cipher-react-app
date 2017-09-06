import * as firebase from 'firebase'
let database

export const init = () => {
  let config = {
    apiKey: "AIzaSyB0rmMPmV_vqJK7cvY9ots39uNwJKp3luc",
    authDomain: "cryptocesar.firebaseapp.com",
    databaseURL: "https://cryptocesar.firebaseio.com",
    storageBucket: "cryptocesar.appspot.com",
    messagingSenderId: "799637015364"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}

export default firebase;