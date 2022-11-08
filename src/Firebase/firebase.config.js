import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFI72YoiFcpjsYHoooRMmi-6hy0VMkZNw",
  authDomain: "doctor-hub-8d110.firebaseapp.com",
  projectId: "doctor-hub-8d110",
  storageBucket: "doctor-hub-8d110.appspot.com",
  messagingSenderId: "1092059141299",
  appId: "1:1092059141299:web:a464302a1fb72efb7e4cc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app