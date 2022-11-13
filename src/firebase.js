import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDszrMaGs_YUmaKK3vDiJv9Dy-b2iPhKmQ",
    authDomain: "todo-crud-4f48c.firebaseapp.com",
    projectId: "todo-crud-4f48c",
    storageBucket: "todo-crud-4f48c.appspot.com",
    messagingSenderId: "322077130905",
    appId: "1:322077130905:web:0c77749aa414b9a8ec3808"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};