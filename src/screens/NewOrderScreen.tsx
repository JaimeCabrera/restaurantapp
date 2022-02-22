import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {RootStackParamList} from '../../App';
import globalStyles from '../styles/globalStyles';

type newOrderScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'order-new'
>;

export const NewOrderScreen = () => {
  const navigation = useNavigation<newOrderScreenProp>();

  return (
    <View style={globalStyles.container}>
      {/* <Text>NewOrderScreen</Text> */}
      <View style={styles.content}>
        <Button
          mode="outlined"
          compact
          color="#2C3E50"
          onPress={() => navigation.navigate('menu')}
          style={globalStyles.btnPrimary}>
          Crear Nueva Orden
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
