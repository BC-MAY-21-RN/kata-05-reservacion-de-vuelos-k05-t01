/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';

const Results = function ({navigation}) {
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View>
        <Text>COL</Text>
        <Flight />
        <Text>CDMX</Text>
      </View>
      <Text>
        <Span text="request" />
      </Text>
      <ButtonForm text={<Span text="finish" />} />
      <Text
        onPress={() => {
          navigation.navigate('Calendar');
        }}>
        <Span text="next" />
      </Text>
    </SafeAreaView>
  );
};

export default Results;
