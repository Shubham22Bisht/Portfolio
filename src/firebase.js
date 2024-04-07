import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAE4FuXSfWnfLFjpnvnl-tXU1uu8ywVvDk",
  authDomain: "shubham-portfolio-f331d.firebaseapp.com",
  projectId: "shubham-portfolio-f331d",
  storageBucket: "shubham-portfolio-f331d.appspot.com",
  messagingSenderId: "980441758466",
  appId: "1:980441758466:web:cbdf5b0f11d596ce6f201b",
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore();
