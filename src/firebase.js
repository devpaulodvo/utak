import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyAkccV56LyZAaMk3MCra3K9WdcPl8RlxPc",
    authDomain: "https://utakio-43429-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "utakio-43429",
    storageBucket: "utakio-43429.appspot.com",
    messagingSenderId: "1048648585250",
    appId: "1:1048648585250:web:c3a9e447050aa9a6b1ba7b",
    measurementId: "G-BE17D1LMXW",
    databaseURL: "https://utakio-43429-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);