// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFtNEDigvGufj7kJzhSczGPOXhDVGYu0k",
  authDomain: "trust-ease-client.firebaseapp.com",
  projectId: "trust-ease-client",
  storageBucket: "trust-ease-client.firebasestorage.app",
  messagingSenderId: "617707701512",
  appId: "1:617707701512:web:173c110f005c4633fe98bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);