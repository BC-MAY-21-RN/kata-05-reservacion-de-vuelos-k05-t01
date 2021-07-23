/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {useGoogleConfiguration} from './src/helpers/firebaseSignUp';
import SignUp from './src/screens/SignUp';
import LogIn from './src/screens/LogIn';
import From from './src/screens/booking/From';
import To from './src/screens/booking/To';
import Date from './src/screens/booking/Date';
import Passenger from './src/screens/booking/Passenger';
import Results from './src/screens/booking/Results';
import {useGoogleConfiguration} from './src/helpers/firebaseSignUp';

const Stack = createStackNavigator();

const listScreens = [
  {name: 'SignUp', component: SignUp},
  {name: 'LogIn', component: LogIn},
  {name: 'From', component: From},
  {name: 'To', component: To},
  {name: 'Date', component: Date},
  {name: 'Passenger', component: Passenger},
  {name: 'Results', component: Results},
];

const screens = listScreens.map(({name, component}) => (
  <Stack.Screen key={name} name={name} component={component} />
));

const App = () => {
  useGoogleConfiguration();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{header: () => null}}>
          {screens}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
