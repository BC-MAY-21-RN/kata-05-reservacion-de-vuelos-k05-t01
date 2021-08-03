/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, View, Text} from 'react-native';
import Span, {span} from '../consts/i18n/en';
import style from '../consts/style';
import ArrowBack from '../components/booking/ArrowBack';
import ScreenGreenTitle from '../components/screenConsts/ScreenGreenTitle';
import PlusButton from './../components/flights/PlusButton';

import {ListItem} from '../components/booking/ListItem';

const FlightReservation = ({navigation, flightList: {flights},getFlightsUser}) => {
  useEffect(async() => {
    await getFlightsUser();
  }, []);

  const flightListComponent = flights.map((item,index) => {
    return <ListItem {...item} key={index} />;
  });
  return (
    <View style={style.flights_container}>
      <ScrollView>
        <ArrowBack
          navigation={() => navigation.navigate('LogIn')}
          name={'logout'}
        />
        <ScreenGreenTitle span={'flights'} />
        {flights.length ? flightListComponent : null}
      </ScrollView>
      <PlusButton navigation={() => navigation.navigate('From')} />
    </View>
  );
};

export default FlightReservation;
