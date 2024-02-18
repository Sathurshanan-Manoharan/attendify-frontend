import {initializeApp} from 'firebase/app';
import { getApps } from 'firebase/app';
import 'firebase/auth';
import React, {useEffect} from "react";
import { getAuth } from 'firebase/auth';


// Config for firebase
const firebaseConfig = {
    apiKey: "AIzaSyAt94J4hukYuKo2w-i5lMDnMsxQtVlFzpY",
    authDomain: "attendify-e0e8f.firebaseapp.com",
    projectId: "attendify-e0e8f",
    storageBucket: "attendify-e0e8f.appspot.com",
    messagingSenderId: "501326192763",
    appId: "1:501326192763:web:12133c32ce8f3b998282de",
    measurementId: "G-FGVM6SYHYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)



  