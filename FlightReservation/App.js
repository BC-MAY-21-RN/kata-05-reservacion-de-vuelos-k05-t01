/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
import From from './src/screens/booking/From';
import To from './src/screens/booking/To';
import Date from './src/screens/booking/Date';
import Passenger from './src/screens/booking/Passenger';
import Results from './src/screens/booking/Results';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="From" component={From} />
          <Stack.Screen name="To" component={To} />
          <Stack.Screen name="Date" component={Date} />
          <Stack.Screen name="Passenger" component={Passenger} />
          <Stack.Screen name="Results" component={Results} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
