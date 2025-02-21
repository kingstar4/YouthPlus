// import { Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../auth/Register';
import ScreenName from '../constants/ScreenName';
import { RootStackParamList } from './RootStackParamList';
import ConfirmDetails from '../auth/ConfirmDetails';


const Stack = createNativeStackNavigator<RootStackParamList>();

const PUBLIC_ROUTE = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={ScreenName.Register}>
      <Stack.Screen name={ScreenName.Register} component={Register}/>
      <Stack.Screen name={ScreenName.ConfirmDetails} component={ConfirmDetails}/>
    </Stack.Navigator>
  );
};

export default PUBLIC_ROUTE;

