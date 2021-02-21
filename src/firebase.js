import 'firebase/firestore'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBNQPpUtWO6B_JMe_4UzMGawPpGh0SLXOs',
  authDomain: 'zulu-tasks.firebaseapp.com',
  projectId: 'zulu-tasks',
  storageBucket: 'zulu-tasks.appspot.com',
  messagingSenderId: '445462385053',
  appId: '1:445462385053:web:5075aece68150c377c1f74',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
