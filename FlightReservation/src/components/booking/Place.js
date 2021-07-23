/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import color from '../../consts/colors';
import style from '../../consts/style';

const Place = function ({place, setSelectedPlace}) {
  return (
    <SafeAreaView>
      <View>
        <Picker
          dropdownIconColor={color.orange}
          selectedValue={place}
          onValueChange={itemValue => setSelectedPlace(itemValue)}>
          <Picker.Item style={style.listText} label="Select location:" />
          <Picker.Item
            style={style.itemListText}
            label="Ciudad de Mexico"
            value="Ciudad de Mexico"
          />
          <Picker.Item
            style={style.itemListText}
            label="Aguascalientes"
            value="Aguascalientes"
          />
          <Picker.Item
            style={style.itemListText}
            label="Colima"
            value="Colima"
          />
          <Picker.Item
            style={style.itemListText}
            label="Sinaloa"
            value="Sinaloa"
          />
          <Picker.Item
            style={style.itemListText}
            label="Zacatecas"
            value="Zacatecas"
          />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default Place;
