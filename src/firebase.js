import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBsUaZGTL3yVqbzkZhK8R0sabI4N8a2fHQ",
  authDomain: "cheatbutton-e5e1f.web.app",
  databaseURL: "https://cheatbutton-e5e1f.firebaseio.com/",
};

firebase.initializeApp(config);
export const db = firebase.database();
