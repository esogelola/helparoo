import { initializeApp } from "firebase/app";

import {
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
} from "@firebase/auth";

import { config } from "./config";

class Firebase {
  constructor() {
    this.firebaseApp = initializeApp(config);
    this.auth = getAuth(this.firebaseApp);
  }

  async register(name, email, password) {
    const newUser = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    return updateProfile(newUser, {
      displayName: name,
    });
  }

  login(email, password) {
    return signInWithEmailAndPassword(email, password);
  }
  logout() {
    return signOut();
  }

  resetPassword(email) {
    return sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
