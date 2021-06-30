import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Text>App</Text>
      </View>
    </Provider>
  );
}
