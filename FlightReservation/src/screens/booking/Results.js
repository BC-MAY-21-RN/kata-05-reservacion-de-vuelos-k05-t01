/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';

const Results = function ({navigation, route}) {
  const next = () => {
    navigation.navigate('Results', {
      ...route.params,
    });
  };
  const {startDate = new Date(startDate), endDate = new Date(endDate)} =
    route.params;
  console.log(route.params);
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
        <Text>{route.params.passengers}</Text>
        <Text>Passengers</Text>
      </View>
      <Text>
        <Span text="request" />
      </Text>
      <ButtonForm onPress={next} text={<Span text="finish" />} />
    </SafeAreaView>
  );
};

export default Results;
