import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjogVkLypTt2D3lTFB-zb96zNd59vuz2U",
    authDomain: "espl-c563e.firebaseapp.com",
    projectId: "espl-c563e",
    storageBucket: "espl-c563e.appspot.com",
    messagingSenderId: "981245955058",
    appId: "1:981245955058:web:be1d39b200d6a516f2796b",
    measurementId: "G-KBJBMEV0LF"
};

export const app = initializeApp(firebaseConfig);
