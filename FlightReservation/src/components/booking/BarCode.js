/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image} from 'react-native';
import style from '../../consts/style';

const BarCode = function () {
  return (
    <View style={style.barcodeContainer}>
      <Image
        style={style.imgCode}
        source={require('../../consts/img/code.png')}
      />
    </View>
  );
};

export default BarCode;
