/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const listPassengers = [
  {label: '1', value: '1'},
  {label: '2', value: '2'},
  {label: '3', value: '3'},
  {label: '4', value: '4'},
  {label: '5', value: '5'},
];

const passenger = listPassengers.map(({label, value}) => (
  <Picker.Item key={label} label={label} value={value} />
));

const Passengers = function ({passengers, setPassengers}) {
  return (
    <SafeAreaView>
      <View>
        <Picker
          selectedValue={passengers}
          onValueChange={itemValue => setPassengers(itemValue)}>
          {passenger}
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default Passengers;
