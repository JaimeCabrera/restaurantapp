import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NewOrderScreen} from './src/screens/NewOrderScreen';
import {MenuScreen} from './src/screens/MenuScreen';
import {DetailDishScreen} from './src/screens/DetailDishScreen';
import {FormDishScreen} from './src/screens/FormDishScreen';
import {SummaryOrderScreen} from './src/screens/SummaryOrderScreen';
import {ProgressOrderScreen} from './src/screens/ProgressOrderScreen';
// importar state de firebase
import FirebaseState from './src/context/firebase/firebaseState';
import OrdersState from './src/context/orders/ordersState';
// react-native-paper en
import {Provider as PaperProvider} from 'react-native-paper';

// para modificar los colores por defecto del thema

export type RootStackParamList = {
  'order-new': undefined;
  menu: undefined;
  'dish-details': undefined;
  'dish-form': undefined;
  'order-summary': undefined;
  'order-progress': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <FirebaseState>
      <OrdersState>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                // headerStyle: {
                //   backgroundColor: '#F1C40F',
                // },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTintColor: '#34495E',
              }}>
              <Stack.Screen
                name="order-new"
                component={NewOrderScreen}
                options={{title: 'Nueva Orden'}}
              />
              <Stack.Screen
                name="menu"
                component={MenuScreen}
                options={{title: 'Menú'}}
              />
              <Stack.Screen
                name="dish-details"
                component={DetailDishScreen}
                options={{title: 'Detaller platillo'}}
              />
              <Stack.Screen
                name="dish-form"
                component={FormDishScreen}
                options={{title: 'Ordenar Paltillo'}}
              />
              <Stack.Screen
                name="order-summary"
                component={SummaryOrderScreen}
                options={{title: 'Resumen pedido'}}
              />
              <Stack.Screen
                name="order-progress"
                component={ProgressOrderScreen}
                options={{title: 'Progreso pedido'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </OrdersState>
    </FirebaseState>
  );
};

export default App;

// colores
// amarillo #F1C40F
// negro #34495E
