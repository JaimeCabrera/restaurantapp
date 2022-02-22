import {createContext} from 'react';
import {firebase} from '../../firebase';

const defaultState = {
  menu: [],
  firebase: firebase,
  getAllProducts: () => {
    return;
  },
};

const FirebaseContext = createContext(defaultState);

export default FirebaseContext;
