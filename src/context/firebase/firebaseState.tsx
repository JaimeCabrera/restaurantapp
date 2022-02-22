import React, {useReducer} from 'react';
import {firebase} from '../../firebase';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';

const FirebaseState = (props: any) => {
  // crear uns atate inicial
  const initialStte = {
    menu: [],
  };
  // use reducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialStte);
  return (
    <FirebaseContext.Provider value={{menu: state.menu, firebase}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
