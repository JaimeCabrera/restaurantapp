import {initializeApp} from 'firebase/app';
import {
  getFirestore,
  doc,
  getDocs,
  onSnapshot,
  collection,
} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

import firebaseConfig from './config';

const firebase = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage(firebase);

export {firebase, db, doc, getDocs, onSnapshot, storage, collection};
