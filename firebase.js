import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDFbtpcLOzKeuMpBpFtQVKu_UHI_hI8VcU",
  authDomain: "react-notes-72306.firebaseapp.com",
  projectId: "react-notes-72306",
  storageBucket: "react-notes-72306.appspot.com",
  messagingSenderId: "304697435716",
  appId: "1:304697435716:web:05d24d03c5b874879cfe11"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

