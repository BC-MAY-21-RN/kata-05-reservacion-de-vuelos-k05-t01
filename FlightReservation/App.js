/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './src/screens/SignUp';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import LogIn from './src/screens/LogIn';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
