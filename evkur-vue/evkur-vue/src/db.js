import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


export const firebaseConfig = {
    apiKey: "AIzaSyCMa2fWP60QMxsRMDOFSOVvBHvSkUL6-_w",
    authDomain: "evkur-ef311.firebaseapp.com",
    projectId: "evkur-ef311",
    storageBucket: "evkur-ef311.appspot.com",
    messagingSenderId: "824110346951",
    appId: "1:824110346951:web:dc39928363aa67cfbfc4e2",
};

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()