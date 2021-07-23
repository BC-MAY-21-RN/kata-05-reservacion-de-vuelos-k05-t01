/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FlightImage from './FlightImage';
import color from '../../consts/colors';
import style from '../../consts/style';

const listPlaces = [
  {label: 'Select location:', value: null},
  {label: 'Ciudad de Mexico', value: 'Ciudad de Mexico'},
  {label: 'Aguascalientes', value: 'Aguascalientes'},
  {label: 'Colima', value: 'Colima'},
  {label: 'Sinaloa', value: 'Sinaloa'},
  {label: 'Zacatecas', value: 'Zacatecas'},
];

const places = listPlaces.map(({label, value}) => (
  <Picker.Item
    style={style.itemListText}
    key={label}
    label={label}
    value={value}
  />
));

const Place = function ({place, setSelectedPlace}) {
  return (
    <SafeAreaView>
      <View style={style.listPicker}>
        <Picker
          dropdownIconColor={color.green}
          selectedValue={place}
          onValueChange={itemValue => setSelectedPlace(itemValue)}>
          {places}
        </Picker>
        <FlightImage />
      </View>
    </SafeAreaView>
  );
};

export default Place;
