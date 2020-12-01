import firebase from 'firebase/app';
import { FIREBASE_CONFIG } from './firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// measurementId: "G-DPZZKQQLTD"

if(typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    firebase.firestore();
    firebase.storage();
}

export default firebase;