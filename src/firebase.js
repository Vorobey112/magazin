import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
apiKey : "AIzaSyAl7UqhXi5m4c9m1mxX2k4aRCAuqBBBYzg" , 
  authDomain : "magazin-38001.firebaseapp.com" , 
  projectId : "magazin-38001" , 
  storageBucket : "magazin-38001.firebasestorage.app" , 
  messageSenderId : "83620956465" , 
  appId : "1:83620956465:web:f6f112201e848bdf12c810"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);