import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA6t7HWHhHXqdjCQlf_NmuOtCVYt532t4I",
    authDomain: "crown-db-11700.firebaseapp.com",
    databaseURL: "https://crown-db-11700.firebaseio.com",
    projectId: "crown-db-11700",
    storageBucket: "",
    messagingSenderId: "818925132902",
    appId: "1:818925132902:web:89c2de5f870a0498"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
