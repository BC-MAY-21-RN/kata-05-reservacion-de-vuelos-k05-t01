/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../consts/style';

const ArrowBack = function ({navigation, name}) {
  return (
    <View>
      <Icon
        style={[style.iconBooking, style.upper_background]}
        name={name}
        onPress={navigation}
      />
    </View>
  );
};

export default ArrowBack;
