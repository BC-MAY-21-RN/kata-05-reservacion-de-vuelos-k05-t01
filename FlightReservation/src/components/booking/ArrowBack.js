/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../consts/style';

const ArrowBack = function ({navigation}) {
  return (
    <View style={style.upper_background}>
      <Icon
        style={style.iconBooking}
        name="chevron-left"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ArrowBack;
