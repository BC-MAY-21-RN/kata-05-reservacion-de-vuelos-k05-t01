/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from '../../consts/style';
import Span from '../../consts/i18n/en';

const Request = function () {
  return (
    <View style={style.resultsContainer}>
      <View style={style.bookingTitleContainer}>
        <Text style={style.resultsTitle}>
          <Span text="request" />
        </Text>
      </View>
    </View>
  );
};

export default Request;
