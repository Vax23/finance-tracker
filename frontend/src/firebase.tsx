import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5v6JDqYPz2YtfaEGto2WbfA6ETmzXtfo",
  authDomain: "finance-tracker-ffb69.firebaseapp.com",
  projectId: "finance-tracker-ffb69",
  storageBucket: "finance-tracker-ffb69.firebasestorage.app",
  messagingSenderId: "129500637588",
  appId: "1:129500637588:web:813cd74fbb1368905d8781",
  measurementId: "G-WXZR7GC0Z3"
};

const app = initializeApp(firebaseConfig);
console.log("🔥 Firebase initialized successfully");
console.log("📦 Firebase App:", app);

const db = getFirestore(app);
console.log("🗄️ Firestore connected");
console.log("🗄️ Firestore db", db);

export default db;
