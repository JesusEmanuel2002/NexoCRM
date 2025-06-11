import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../features/dashboard/presentation/screens/HomeScreen';
import ContactsScreen from '../features/contacts/presentation/screens/ContactsScreen';

export type RootStackParamList = {
  Home: undefined;
  Contacts: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;