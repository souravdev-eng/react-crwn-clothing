import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
