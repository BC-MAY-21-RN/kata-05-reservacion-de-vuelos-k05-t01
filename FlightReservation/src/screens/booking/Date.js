/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import FlightTitle from '../../components/booking/FlightTitle';
import Calendar from '../../components/booking/Calendar';
import style from '../../consts/style';
import BookingTitle from '../../components/booking/BookingTitle';
import NextButton from '../../components/booking/NextButton';

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
      <View style={style.superior_content_container}>
        <FlightTitle
          fromPlace={route.params.fromPlace}
          toPlace={route.params.toPlace}
        />
        <BookingTitle flight="event" text="date" />
      </View>
      <View style={style.calendarContainer}>
        <Calendar
          dateSelected={dateSelected}
          setSelectedDate={setSelectedDate}
        />
      </View>
      <NextButton
        isDisabled={!dateSelected.startDate || !dateSelected.endDate}
        styleButton={style.btnCalendar}
        next={next}
        text="next"
      />
    </SafeAreaView>
  );
};

export default Date;
