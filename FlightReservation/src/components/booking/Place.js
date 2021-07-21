/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Place = function ({fromPlace, setSelectedFromPlace}) {
  return (
    <SafeAreaView>
      <View>
        <Picker
          selectedValue={fromPlace}
          onValueChange={itemValue => setSelectedFromPlace(itemValue)}>
          <Picker.Item label="Select location:" />
          <Picker.Item label="CDMX" value="Ciudad de Mexico" />
          <Picker.Item label="AGS" value="Aguascalientes" />
          <Picker.Item label="COL" value="Colima" />
          <Picker.Item label="SIN" value="Sinaloa" />
          <Picker.Item label="ZAC" value="Zacatecas" />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default Place;
