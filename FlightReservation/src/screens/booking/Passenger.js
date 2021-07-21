/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';
import Passengers from '../../components/booking/Passengers';

const Passenger = function ({navigation}) {
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View>
        <Text>COL</Text>
        <Flight />
        <Text>CDMX</Text>
      </View>
      <Text>
        <Span text="passenger" />
      </Text>
      <Passengers />
      <ButtonForm text={<Span text="Finish" />} />
      <Text
        onPress={() => {
          navigation.navigate('Results');
        }}>
        <Span text="next" />
      </Text>
    </SafeAreaView>
  );
};

export default Passenger;
