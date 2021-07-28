/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from '../../consts/style';

const DateTitle = function ({startDate, endDate, passengers}) {
  return (
    <View style={style.dateContainer}>
      <Text style={style.dateTitle}>{startDate}</Text>
      <Text style={style.dateTitle}>{endDate}</Text>
      <Text style={style.dateTitle}>{passengers}</Text>
    </View>
  );
};

export default DateTitle;
