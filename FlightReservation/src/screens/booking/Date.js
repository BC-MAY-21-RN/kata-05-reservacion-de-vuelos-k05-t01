/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';
import Calendar from '../../components/booking/Calendar';
import style from '../../consts/style';

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
        <View style={style.upperLocationContainer}>
          <Text style={style.upperLocationTitle}>{route.params.fromPlace}</Text>
          <Flight name="flight" />
          <Text style={style.upperLocationTitle}>{route.params.toPlace}</Text>
        </View>
        <View style={style.bookingTitleContainer}>
          <Flight name="event" />
          <Text style={style.bookingTitle}>
            <Span text="date" />
          </Text>
        </View>
      </View>
      <View style={style.calendarContainer}>
        <Calendar
          dateSelected={dateSelected}
          setSelectedDate={setSelectedDate}
        />
      </View>
      <View style={style.btnCalendar}>
        <ButtonForm onPress={next} text={<Span text="next" />} />
      </View>
    </SafeAreaView>
  );
};

export default Date;
