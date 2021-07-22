/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Passengers = function ({passengers, setPassengers}) {
  return (
    <SafeAreaView>
      <View>
        <Picker
          selectedValue={passengers}
          onValueChange={itemValue => setPassengers(itemValue)}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

export default Passengers;
