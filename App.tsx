import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewOrderScreen} from './src/screens/NewOrderScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="new-order"
          component={NewOrderScreen}
          options={{title: 'Nueva Orden'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
