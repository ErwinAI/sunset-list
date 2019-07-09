import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCujAdgD9M9pxTP0RvdgJtRVg6Qm_AZfwo',
  authDomain: 'sunset-list.firebaseapp.com',
  databaseURL: 'https://sunset-list.firebaseio.com',
  projectId: 'sunset-list',
  storageBucket: '',
  messagingSenderId: '502375275069',
  appId: '1:502375275069:web:31ed1519a979c1f0'
}

firebase.initializeApp(config)
