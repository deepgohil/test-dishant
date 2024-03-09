import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpU_kjClk_KURa0qYeGOOG_huoV5YRPc4",
  authDomain: "lochacks.firebaseapp.com",
  projectId: "lochacks",
  storageBucket: "lochacks.appspot.com",
  messagingSenderId: "763008678658",
  appId: "1:763008678658:web:f5a96c4add53d3ce5aa01b",
  measurementId: "G-YGE0D8SFMR"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);