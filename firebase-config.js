// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQm9pE1KOptRw8MQe7_pooY4ePzR-j57Y",
  authDomain: "labwa2.firebaseapp.com",
  projectId: "labwa2",
  storageBucket: "labwa2.firebasestorage.app",
  messagingSenderId: "401022812294",
  appId: "1:401022812294:web:7ff84cfaec75f5aa565107",
  measurementId: "G-YSKFSS4H8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

// Export everything needed in app.js
export {
  db,
  messaging,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  setDoc
};