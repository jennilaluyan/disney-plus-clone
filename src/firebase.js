import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB9_iinnXDel1xd2C-YezgXQl0jiVCSJRI",
    authDomain: "disney-plus-clone-ca2db.firebaseapp.com",
    projectId: "disney-plus-clone-ca2db",
    storageBucket: "disney-plus-clone-ca2db.appspot.com",
    messagingSenderId: "63762438653",
    appId: "1:63762438653:web:4758a6f1c0d9da6506a194",
    measurementId: "G-7WKVHRZYTT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, storage, db };
