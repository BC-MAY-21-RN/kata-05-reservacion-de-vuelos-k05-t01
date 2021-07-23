/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const listPlaces = [
  {label: 'Select location:', value: null},
  {label: 'Ciudad de Mexico', value: 'Ciudad de Mexico'},
  {label: 'Aguascalientes', value: 'Aguascalientes'},
  {label: 'Colima', value: 'Colima'},
  {label: 'Sinaloa', value: 'Sinaloa'},
  {label: 'Zacatecas', value: 'Zacatecas'},
];

const places = listPlaces.map(({label, value}) => (
  <Picker.Item key={label} label={label} value={value} />
));

const Place = function ({place, setSelectedPlace}) {
  return (
    <SafeAreaView>
      <View>
        <Picker
          selectedValue={place}
          onValueChange={itemValue => setSelectedPlace(itemValue)}>
          {places}
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default Place;
