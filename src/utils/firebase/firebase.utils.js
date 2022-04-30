import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMGbYWlSmoJiV-SZDKDko1Z0E-srYdtGI",
  authDomain: "crwn-clothing-db-d6016.firebaseapp.com",
  projectId: "crwn-clothing-db-d6016",
  storageBucket: "crwn-clothing-db-d6016.appspot.com",
  messagingSenderId: "372373134916",
  appId: "1:372373134916:web:1063b20e9ffd13dc5de611",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// set up google auth provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// firestore

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnaSnapshot = await getDoc(userDocRef);

  // check if user exists in db
  // create / set the document with the user data

  if (!userSnaSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error);
    }
  }
  // user data does not exist in db
  return userDocRef;
};
