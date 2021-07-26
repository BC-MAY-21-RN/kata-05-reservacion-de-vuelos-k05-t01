/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import style from '../../consts/style';

const FlightImage = function () {
  return (
    <Image
      style={style.imgFlight}
      source={require('../../consts/img/flight.png')}
    />
  );
};

export default FlightImage;
