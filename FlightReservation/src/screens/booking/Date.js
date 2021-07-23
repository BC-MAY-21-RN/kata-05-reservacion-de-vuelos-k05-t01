/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';
import Calendar from '../../components/booking/Calendar';

const Date = function ({navigation, route}) {
  const [dateSelected, setSelectedDate] = useState({
    startDate: null,
    endDate: null,
  });
  const next = () => {
    navigation.navigate('Passenger', {
      ...route.params,
      startDate: dateSelected.startDate.toString(),
      endDate: dateSelected.endDate.toString(),
    });
  };

  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View>
        <Text>{route.params.fromPlace}</Text>
        <Flight />
        <Text>{route.params.toPlace}</Text>
      </View>
      <Text>
        <Span text="date" />
      </Text>
      <Calendar dateSelected={dateSelected} setSelectedDate={setSelectedDate} />
      <ButtonForm onPress={next} text={<Span text="next" />} />
    </SafeAreaView>
  );
};

export default Date;
