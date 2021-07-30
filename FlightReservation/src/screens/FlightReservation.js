/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Span, {span} from '../consts/i18n/en';
import style from '../consts/style';
import ArrowBack from '../components/booking/ArrowBack';
import FlightDestiny from '../components/flights/FlightDestiny';
import ScreenGreenTitle from '../components/screenConsts/ScreenGreenTitle';
import PlusButton from './../components/flights/PlusButton';

const FlightReservation = ({navigation}) => {
  return (
    <View style={style.flights_container}>
      <ScrollView>
        <View>
          <ArrowBack
            navigation={() => navigation.navigate('LogIn')}
            name={'logout'}
          />
          <ScreenGreenTitle span={'flights'} />
          <View style={style.inferior_content_container}>
            <FlightDestiny />
          </View>
        </View>
      </ScrollView>
      <PlusButton navigation={() => navigation.navigate('From')} />
      <View></View>
    </View>
  );
};

export default FlightReservation;
