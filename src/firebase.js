// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAF5rxthFi4QLIOj7c_msPPA5fpljF0l2c',
  authDomain: 'news-app-auth-2c67d.firebaseapp.com',
  projectId: 'news-app-auth-2c67d',
  storageBucket: 'news-app-auth-2c67d.appspot.com',
  messagingSenderId: '504271856853',
  appId: '1:504271856853:web:5da3c432e54c71e4796e5c',
  measurementId: 'G-3SFV5XWN1P'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
