/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FlightImage from './FlightImage';
import color from '../../consts/colors';
import style from '../../consts/style';

const ItemList = function ({list, item, setSelectedItem}) {
  const items = list.map(({label, value}) => (
    <Picker.Item
      style={style.itemListText}
      key={label}
      label={label}
      value={value}
    />
  ));
  return (
    <SafeAreaView>
      <View style={style.listContainer}>
        <Picker
          dropdownIconColor={color.green}
          selectedValue={item}
          onValueChange={itemValue => setSelectedItem(itemValue)}>
          {items}
        </Picker>
        <FlightImage />
      </View>
    </SafeAreaView>
  );
};

export default ItemList;