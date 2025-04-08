// js/auth-check.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_Zyp4-it4jqoDDKoHQYkJZcW6wpgzNIw",
  authDomain: "rasandesign-c13b0.firebaseapp.com",
  projectId: "rasandesign-c13b0",
  storageBucket: "rasandesign-c13b0.appspot.com",
  messagingSenderId: "704936216056",
  appId: "1:704936216056:web:xxxxxx"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function checkLogin(redirectIfNotLoggedIn = true) {
  onAuthStateChanged(auth, (user) => {
    if (user && user.emailVerified) {
      console.log("✅ کاربر وارد شده:", user.email);
    } else {
      if (redirectIfNotLoggedIn) {
        window.location.href = "/login.html";
      }
    }
  });
}
