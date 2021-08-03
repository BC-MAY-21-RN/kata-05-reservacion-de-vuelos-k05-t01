/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useGoogleConfiguration} from './src/helpers/firebaseSignUp';
import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
import From from './src/screens/booking/From';
import To from './src/screens/booking/To';
import Date from './src/screens/booking/Date';
import Passenger from './src/screens/booking/Passenger';

import {FlightReservation,Results} from './src/containers/index';
import withRedux from './src/redux';

const Stack = createStackNavigator();

const listScreens = [
  {name: 'LogIn', component: LogIn},
  {name: 'SignUp', component: SignUp},
  {name: 'From', component: From},
  {name: 'To', component: To},
  {name: 'Date', component: Date},
  {name: 'Passenger', component: Passenger},
  {name: 'Results', component: Results},
  {name: 'FlightReservation', component: FlightReservation},
];

const screens = listScreens.map(({name, component}) => (
  <Stack.Screen key={name} name={name} component={component} />
));

const App = () => {
  useGoogleConfiguration();
  return (
    <NavigationContainer>

        <Stack.Navigator screenOptions={{header: () => null}}>
          {screens}
        </Stack.Navigator>

    </NavigationContainer>
  );
};


export default withRedux(App);
