import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import '@/.env.local'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: API_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};