import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCmkD9JJmGFp3oMyk_ThL3rn-r37ySNiCQ",
  authDomain: "corpros-ff144.firebaseapp.com",
  projectId: "corpros-ff144",
  storageBucket: "corpros-ff144.firebasestorage.app",
  messagingSenderId: "842173450046",
  appId: "1:842173450046:web:60ad64074de7942ec68e6f",
  measurementId: "G-4HV32HWZ36"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);

// Initialize Analytics (only in browser)
let analyticsInstance = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analyticsInstance = getAnalytics(app);
    }
  });
}
export const analytics = analyticsInstance;


