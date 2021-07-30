/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from '../../consts/style';
import Flight from './Flight';

const FlightTitle = function ({fromPlace, toPlace}) {
  return (
    <View style={style.upperLocationContainer}>
      <Text style={style.upperLocationTitle}>{fromPlace}</Text>
      <Flight name="flight" />
      <Text style={style.upperLocationTitle}>{toPlace}</Text>
    </View>
  );
};

export default FlightTitle;
