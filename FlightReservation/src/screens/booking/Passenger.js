/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import style from '../../consts/style';
import ArrowBack from '../../components/booking/ArrowBack';
import FlightTitle from '../../components/booking/FlightTitle';
import BookingTitle from '../../components/booking/BookingTitle';
import List from '../../components/booking/ItemList';
import ListPassengers from '../../components/booking/consts/ListPassengers';
import NextButton from '../../components/booking/NextButton';
import DateTitle from '../../components/booking/DateTitle';

const Passenger = function ({navigation, route}) {
  const [passengers, setPassengers] = useState();
  const next = () => {
    navigation.navigate('Results', {
      ...route.params,
      passengers,
    });
  };
  const {startDate = new Date(startDate), endDate = new Date(endDate)} =
    route.params;
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View style={style.superior_passenegers_container}>
        <FlightTitle
          fromPlace={route.params.fromPlace}
          toPlace={route.params.toPlace}
        />
        <DateTitle
          startDate={startDate}
          endDate={endDate}
          passengers={route.params.passengers}
        />
        <BookingTitle flight="people" text="passenger" />
      </View>
      <List
        list={ListPassengers}
        item={passengers}
        setSelectedItem={setPassengers}
      />
      <NextButton styleButton={style.btnPasseneger} next={next} text="next" />
    </SafeAreaView>
  );
};

export default Passenger;
