/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FlightImage from './FlightImage';
import color from '../../consts/colors';
import style from '../../consts/style';

const listPassengers = [
  {label: 'Select number:', value: null},
  {label: '1', value: '1 passenger'},
  {label: '2', value: '2 passengers'},
  {label: '3', value: '3 passengers'},
  {label: '4', value: '4 passengers'},
  {label: '5', value: '5 passengers'},
  {label: '6', value: '6 passengers'},
];

const passenger = listPassengers.map(({label, value}) => (
  <Picker.Item
    style={style.itemListText}
    key={label}
    label={label}
    value={value}
  />
));

const Passengers = function ({passengers, setPassengers}) {
  return (
    <SafeAreaView>
      <View style={style.listPicker}>
        <Picker
          dropdownIconColor={color.green}
          selectedValue={passengers}
          onValueChange={itemValue => setPassengers(itemValue)}>
          {passenger}
        </Picker>
        <FlightImage />
      </View>
    </SafeAreaView>
  );
};

export default Passengers;
