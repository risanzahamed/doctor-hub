import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGd4x2jmwIffaRvhCP9fKoIvcN5aJJD68",
  authDomain: "tour-website-react.firebaseapp.com",
  projectId: "tour-website-react",
  storageBucket: "tour-website-react.appspot.com",
  messagingSenderId: "1045059402153",
  appId: "1:1045059402153:web:48bfb6670255f59be2ecb8"
};


const app = initializeApp(firebaseConfig);
export default app