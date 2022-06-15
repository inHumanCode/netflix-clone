import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyD4M-6AXfyIIOigUifGdym9WBU5uSsX3lA",
  authDomain: "netflix-clone-c10f4.firebaseapp.com",
  projectId: "netflix-clone-c10f4",
  storageBucket: "netflix-clone-c10f4.appspot.com",
  messagingSenderId: "166013099983",
  appId: "1:166013099983:web:3d2401611123f95a20fcba"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
