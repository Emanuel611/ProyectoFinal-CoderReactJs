//initializeApp sirve para iniciar la conexión con firebase
import { initializeApp } from "firebase/app";
//Establecemos una instancia de Firebase
import { getFirestore } from "firebase/firestore";
//Objeto de configuración, almacena toda la información de la cuenta
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coder-comi43255.firebaseapp.com",
  projectId: "coder-comi43255",
  storageBucket: "coder-comi43255.appspot.com",
  messagingSenderId: "468641234144",
  appId: "1:468641234144:web:5fbe4a1e6c5de40a986485"
};

// Inicializo Firebase pasando la configuración personal como argumento
// Esto me devuelve una instancia de Firebase
const app = initializeApp(firebaseConfig);

//Exportar esta referencia siempre
export const db = getFirestore(app);