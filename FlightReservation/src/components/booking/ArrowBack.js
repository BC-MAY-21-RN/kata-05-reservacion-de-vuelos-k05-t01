/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../consts/style';

const ArrowBack = function ({navigation}) {
  return (
    <>
      <Icon
        style={style.iconBooking}
        name="chevron-left"
        onPress={() => navigation.goBack()}
      />
    </>
  );
};

export default ArrowBack;
