import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCWeV_n8i3_2t-8zrLZqZxIfcuz9j3KGxk",
  authDomain: "storytellingapp-25280.firebaseapp.com",
  projectId: "storytellingapp-25280",
  storageBucket: "storytellingapp-25280.appspot.com",
  messagingSenderId: "863161686285",
  appId: "1:863161686285:web:fb4d7d968dd234fdaf7844"
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();