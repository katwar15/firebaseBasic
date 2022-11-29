import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxA3uXfCzUM1cCXYQS_Pae0UAcdB9r3tc",
  authDomain: "zdfront13.firebaseapp.com",
  databaseURL:
    "https://zdfront13-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zdfront13",
  storageBucket: "zdfront13.appspot.com",
  messagingSenderId: "990391979677",
  appId: "1:990391979677:web:2b096cb66354706cd20e74",
  measurementId: "G-JFJ0W2X15G",
};

// to tworzy wszystko z firebase - wszystkie dane inijalizacyjne, więc dajesz app wszędzie, gdzie tworzysz nowy
// element typ datase lub auntentyfkacja
export const app = initializeApp(firebaseConfig);
// dodawanie nowych funkcji - tu tworzysz autentykację i tak robisz z innymi rzeczami, typu database

export const auth = getAuth(app);

export const database = getDatabase(app);

export const firestore = getFirestore(app);

export const storage = getStorage(app);
