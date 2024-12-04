 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  
 
  const firebaseConfig = {
    apiKey: "AIzaSyBxXyKGWJL0n8UMGo3FZL9kwVpgI_XSQEs",
    authDomain: "authentication-fac6b.firebaseapp.com",
    projectId: "authentication-fac6b",
    storageBucket: "authentication-fac6b.firebasestorage.app",
    messagingSenderId: "839276973906",
    appId: "1:839276973906:web:eb40f80d114884ff1c348b",
    measurementId: "G-3L2LHEZ4ME"
  };

  const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


 export {sendPasswordResetEmail,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut }