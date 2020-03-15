import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/analytics';

let firebaseConfig = {
    apiKey: "AIzaSyDdRDIw0pdp9jztuDEqAW8d2Tt88ew-haw",
    authDomain: "mckaycourt-78ac3.firebaseapp.com",
    databaseURL: "https://mckaycourt-78ac3.firebaseio.com",
    projectId: "mckaycourt-78ac3",
    storageBucket: "mckaycourt-78ac3.appspot.com",
    messagingSenderId: "756541464330",
    appId: "1:756541464330:web:6971b3015923d72c61a4f3",
    measurementId: "G-7MGGZP32FB"
};
// Initialize Firebase
if (process.env.NODE_ENV !== 'development') {
    firebaseConfig.measurementId = "G-683EL0G92B";
}
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let messaging = null;
if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();
    messaging.usePublicVapidKey('BLHrVmxWJH20NawY3Ion-AuzuSRXFUWW2vrmT6DFEkMWY-WqijtND36KMNKbuxqsyc2O5Pwyx-3RPWoARtkYApk');
}
// firebase.analytics();
export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firebaseMessaging = messaging;