import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCS8IKLNrVL_hmMbSCY-59JaMB-vI_EPag',
  authDomain: 'movieholic-9b3d3.firebaseapp.com',
  databaseURL: 'https://movieholic-9b3d3.firebaseio.com',
  projectId: 'movieholic-9b3d3',
  storageBucket: 'movieholic-9b3d3.appspot.com',
  messagingSenderId: '293525571033',
  appId: '1:293525571033:web:dd883f4f30cd6241d8c5c8'
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const isAdmin = false;
    const firstName = '';
    const lastName = '';
    const phoneNumber = '';
    const gender = '';
    const age = '';
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        isAdmin,
        firstName,
        lastName,
        phoneNumber,
        gender,
        age,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user.', error.message);
    }
  }

  return userRef;
};

export const addMovieCollectionAndDocumentsToFirestore = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(obj.id.toString());
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const addSampleReviewCollectionAndDocumentsToFirestore = async movieIds => {
  const batch = firestore.batch();

  movieIds.forEach(movieId => {
    const movieReviewDocRef = firestore.doc(
      `movieReviews/${movieId.toString()}`
    );
    const newCollectionRef = movieReviewDocRef.collection('reviews');
    const newReviewDocRef = newCollectionRef.doc();

    batch.set(newReviewDocRef, {
      userId: 'JqQIlnctKDMumwduNy9mnq4lhju2',
      displayName: 'Long Nguyễn',
      photoURL: 'https://graph.facebook.com/1632165466941231/picture',
      comment: 'This is an awesome movie !',
      ratings: 8.5,
      spoil: false,
      createdAt: new Date(),
      editedAt: new Date()
    });
  });

  return await batch.commit();
};

export const getMovieCollections = snapshot =>
  snapshot.docs.map(doc => doc.data());

export const getReviewCollections = snapshot =>
  snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

export const convertMoviesSnapshotToMap = movies => {
  const transformedCollections = movies.docs.map(doc => doc.data());

  return transformedCollections.reduce((accumulator, movie) => {
    accumulator[movie.id] = movie;
    return accumulator;
  }, {});
};

export const getCurrenUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ display: 'popup' });

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
