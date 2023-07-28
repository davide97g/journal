import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdkaVrctDLrhMDUR0p_UoaCuyCnyipbKM",
  authDomain: "mood-write.firebaseapp.com",
  projectId: "mood-write",
  storageBucket: "mood-write.appspot.com",
  messagingSenderId: "927085302670",
  appId: "1:927085302670:web:bd51c3ce7eef65f1dc0adf",
  measurementId: "G-3LWGL5C2D3",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
