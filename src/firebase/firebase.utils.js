import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAKMeUD98wA2SgAg_rk3tNPHfD1MkXn080",
    authDomain: "crwn-db-29e1f.firebaseapp.com",
    databaseURL: "https://crwn-db-29e1f.firebaseio.com",
    projectId: "crwn-db-29e1f",
    storageBucket: "crwn-db-29e1f.appspot.com",
    messagingSenderId: "211165979735",
    appId: "1:211165979735:web:4117a0f854aabd8862ef12",
    measurementId: "G-X6ZVT0ZKZM"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"})
export const signInWithGoggle=()=>auth.signInWithPopup(provider);


export default firebase;


