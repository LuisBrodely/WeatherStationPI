import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjys0znhF34D_ZATtyY0DM9ufncRSdgOE",
  authDomain: "iot-proyecto-14113.firebaseapp.com",
  databaseURL: "https://iot-proyecto-14113-default-rtdb.firebaseio.com",
  projectId: "iot-proyecto-14113",
  storageBucket: "iot-proyecto-14113.appspot.com",
  messagingSenderId: "150366618644",
  appId: "1:150366618644:web:3da104573f71cfa14e5301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos en tiempo real
const database = getDatabase(app);

export default database;