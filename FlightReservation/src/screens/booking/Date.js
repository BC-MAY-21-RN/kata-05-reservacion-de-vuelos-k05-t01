/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';
import Calendar from '../../components/booking/Calendar';

const Date = function ({navigation}) {
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View>
        <Text>COL</Text>
        <Flight />
        <Text>CDMX</Text>
      </View>
      <Text>
        <Span text="date" />
      </Text>
      <Calendar />
      <ButtonForm text={<Span text="next" />} />
      <Text
        onPress={() => {
          navigation.navigate('Passenger');
        }}>
        <Span text="next" />
      </Text>
    </SafeAreaView>
  );
};

export default Date;
