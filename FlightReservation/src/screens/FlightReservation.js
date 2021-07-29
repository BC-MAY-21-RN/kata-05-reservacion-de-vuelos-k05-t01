import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Span, {span} from '../consts/i18n/en';
import style from './../consts/style';
import ArrowBack from './../components/booking/ArrowBack';
import FlightDestiny from './../components/flights/FlightDestiny';

const flightList: JSX.Element[] = [];
for (let i = 0; i < 8; i++) {
  flightList.push(<FlightDestiny />);
}

const FlightReservation = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <View style={style.textFieldView}>
          <ArrowBack navigation={navigation} />
          <Text style={style.title}>
            <Span text="flights" />
          </Text>
        </View>
        <View style={style.inferior_content_container}>
          {/* <FlightDestiny /> */}
          {flightList}
        </View>
      </View>
    </ScrollView>
  );
};

export default FlightReservation;
