import React, {useReducer} from 'react';
import {firebase, onSnapshot, collection, db} from '../../firebase';
import {GET_PRODUCTS} from '../../types';
import FirebaseContext from './firebaseContext';
import FirebaseReducer from './firebaseReducer';

const FirebaseState = (props: any) => {
  // crear uns atate inicial
  const initialStte = {
    menu: [],
  };
  // use reducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialStte);
  // funcion que se ejecuta para traer los productos
  const getAllProducts = () => {
    dispatch({
      type: GET_PRODUCTS,
    });
    // consultar a firebase
    try {
      console.log('consulta a la db');
      onSnapshot(
        collection(db, 'platillos'),
        snapshot => {
          const platillos = snapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          console.log(platillos);
          // alamacenar los resultado en el state
          // setDishs(platillos);
          // console.log("Current data: ", snapshot.docs.map);
        },
        error => {
          console.log(error);
        },
      );
      // console.log(doc);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FirebaseContext.Provider
      value={{menu: state.menu, firebase, getAllProducts}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
