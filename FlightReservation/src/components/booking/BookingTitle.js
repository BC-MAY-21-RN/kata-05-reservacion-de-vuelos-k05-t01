/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from '../../consts/style';
import Flight from './Flight';
import Span from '../../consts/i18n/en';

const BookingTitle = function ({flight, text}) {
  return (
    <View style={style.bookingTitleContainer}>
      <Flight name={flight} />
      <Text style={style.bookingTitle}>
        <Span text={text} />
      </Text>
    </View>
  );
};

export default BookingTitle;
