/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import style from '../../consts/style';
import List from '../../components/booking/ItemList';
import ListPlaces from '../../components/booking/consts/ListPlaces';
import BookingTitle from '../../components/booking/BookingTitle';
import ArrowBack from '../../components/booking/ArrowBack';
import NextButton from '../../components/booking/NextButton';
import FlightTitle from '../../components/booking/FlightTitle';

const To = function ({navigation, route}) {
  const [toPlace, setSelectedToPlace] = useState();
  const next = () => {
    navigation.navigate('Date', {
      ...route.params,
      toPlace,
    });
  };
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View style={style.superior_content_container}>
        <FlightTitle fromPlace={route.params.fromPlace} />
        <BookingTitle flight="flight-land" text="to" />
      </View>
      <List
        list={ListPlaces}
        item={toPlace}
        setSelectedItem={setSelectedToPlace}
      />
      <NextButton styleButton={style.btnBooking} next={next} text="next" />
    </SafeAreaView>
  );
};

export default To;
