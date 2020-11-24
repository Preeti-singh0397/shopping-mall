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


export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShort = await userRef.get();

    if (!snapShort.exists) {
        const { displayName, email } = userAuth;
        const createAt=new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...addtionalData
            })
        } catch (error) {
            console.log('user creating error', error.message);
        }
    }
    return userRef;  
}


//firebase.initializeApp(config);
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoggle = () => auth.signInWithPopup(provider);


export default firebase;


