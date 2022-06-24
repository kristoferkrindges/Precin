import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyD8L-jzAhngVfEHmu2N4KlKAQVkv-E8L1k",
	authDomain: "precinauthentication.firebaseapp.com",
	projectId: "precinauthentication",
	storageBucket: "precinauthentication.appspot.com",
	messagingSenderId: "621660805192",
	appId: "1:621660805192:web:e04153f1e79a2c5e61e07d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
