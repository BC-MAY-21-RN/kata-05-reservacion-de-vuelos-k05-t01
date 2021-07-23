/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import color from '../../consts/colors';
import style from '../../consts/style';

const Passengers = function ({passengers, setPassengers}) {
  return (
    <SafeAreaView>
      <View>
        <Picker
          dropdownIconColor={color.orange}
          selectedValue={passengers}
          onValueChange={itemValue => setPassengers(itemValue)}>
          <Picker.Item style={style.listText} label="Select number:" />
          <Picker.Item
            style={style.itemListText}
            label="1 passenger"
            value="1"
          />
          <Picker.Item
            style={style.itemListText}
            label="2 passenger"
            value="2"
          />
          <Picker.Item
            style={style.itemListText}
            label="3 passenger"
            value="3"
          />
          <Picker.Item
            style={style.itemListText}
            label="4 passenger"
            value="4"
          />
          <Picker.Item
            style={style.itemListText}
            label="5 passenger"
            value="5"
          />
          <Picker.Item
            style={style.itemListText}
            label="6 passenger"
            value="6"
          />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default Passengers;
