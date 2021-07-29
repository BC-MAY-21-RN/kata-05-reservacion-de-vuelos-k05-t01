import React from 'react';
import {Text, View} from 'react-native';
import Span, {span} from '../consts/i18n/en';
import style from './../consts/style';
import ArrowBack from './../components/booking/ArrowBack';
import FlightDestiny from './../components/flights/FlightDestiny';

const FlightReservation = ({navigation}) => {
  return (
    <View>
      <View style={style.textFieldView}>
        <ArrowBack navigation={navigation} />
        <Text style={style.title}>
          <Span text="flights" />
        </Text>
      </View>
      <View style={style.inferior_content_container}>
        {/* Insert FlightDestiny */}
        <FlightDestiny />
      </View>
    </View>
  );
};

export default FlightReservation;
