/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import style from '../../consts/style';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import FlightTitle from '../../components/booking/FlightTitle';
import DateTitle from '../../components/booking/DateTitle';
import BarCode from '../../components/booking/BarCode';
import Request from '../../components/booking/Request';
import registerFlight from '../../helpers/firestoreBookings';

const Results = function ({navigation, route}) {
  const {startDate = new Date(startDate), endDate = new Date(endDate)} =
    route.params;

  console.log(route.params);

  return (
    <SafeAreaView>
      <ArrowBack navigation={() => navigation.goBack()} name={"chevron-left"}/>
      <View style={style.superior_content_container}>
        <FlightTitle
          fromPlace={route.params.fromPlace}
          toPlace={route.params.toPlace}
        />
        <DateTitle
          startDate={startDate}
          endDate={endDate}
          passengers={route.params.passengers}
        />
      </View>
      <Request />
      <BarCode />
      <View style={style.btnResults}>
        <ButtonForm
          onPress={async () => await registerFlight(route, navigation)}
          text={<Span text="finish" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Results;
