import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfLwV0Nrekj5Ks_wFlKHNlpqZ5ZWG0K44",
  authDomain: "onlearn-b5c15.firebaseapp.com",
  projectId: "onlearn-b5c15",
  storageBucket: "onlearn-b5c15.appspot.com",
  messagingSenderId: "394310928011",
  appId: "1:394310928011:web:950ddb073bb78f32b4768e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;