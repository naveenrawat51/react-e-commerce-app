import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmnoCsxNKRYbKKlwwMdaQhCuBtgpXrQYs",
    authDomain: "react-ecommerce-app-1dee3.firebaseapp.com",
    databaseURL: "https://react-ecommerce-app-1dee3.firebaseio.com",
    projectId: "react-ecommerce-app-1dee3",
    storageBucket: "react-ecommerce-app-1dee3.appspot.com",
    messagingSenderId: "181686457936",
    appId: "1:181686457936:web:c72d6458499c581753a355",
    measurementId: "G-4E0EJST8D9"
  };

  // save user in database
  export const createUserProfileDocument = async (authUser, additionalData) => {
    if(!authUser) return;

    const userRef = firestore.doc(`users/${authUser.uid}`);
    const snapShot = await userRef.get()
    
    if(!snapShot.exists) {
      const { displayName, email } = authUser;
      const createdAt = new Date();
      const userId = snapShot.id;
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          userId,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;
