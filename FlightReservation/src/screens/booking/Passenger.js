/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';
import Passengers from '../../components/booking/Passengers';

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
      <View>
        <Text>{route.params.fromPlace}</Text>
        <Flight />
        <Text>{route.params.toPlace}</Text>
        <Text>Start date:</Text>
        <Text>{startDate}</Text>
        <Text>End date:</Text>
        <Text>{endDate}</Text>
      </View>
      <Text>
        <Span text="passenger" />
      </Text>
      <Passengers passengers={passengers} setPassengers={setPassengers} />
      <ButtonForm onPress={next} text={<Span text="finish" />} />
    </SafeAreaView>
  );
};

export default Passenger;
