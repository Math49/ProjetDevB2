import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD51ZYYsuOCCrgtSkz4mCOqXQjKpwh3Zzk",
    authDomain: "eslp-hub.firebaseapp.com",
    projectId: "eslp-hub",
    storageBucket: "eslp-hub.appspot.com",
    messagingSenderId: "760155440334",
    appId: "1:760155440334:web:ee337515c4d3afb044bc9f",
    measurementId: "G-ZSRB1RDSCZ"
};

export const app = initializeApp(firebaseConfig);
