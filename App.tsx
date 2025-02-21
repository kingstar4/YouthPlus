/* eslint-disable react-native/no-inline-styles */



import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PUBLIC_ROUTE from './src/routes/PUBLIC_ROUTE';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="PUBLIC_ROUTE">
          <Stack.Screen name="PUBLIC_ROUTE" component={PUBLIC_ROUTE}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;


