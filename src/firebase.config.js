// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsrBq8x1XE2xUFdXxGiJbTjYU7kWMnj-g",
  authDomain: "ecommerce-store-react-dd178.firebaseapp.com",
  projectId: "ecommerce-store-react-dd178",
  storageBucket: "ecommerce-store-react-dd178.appspot.com",
  messagingSenderId: "123676394753",
  appId: "1:123676394753:web:2a91fe55943e73c9538700",
  measurementId: "G-FVJCG2Q4FR",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
