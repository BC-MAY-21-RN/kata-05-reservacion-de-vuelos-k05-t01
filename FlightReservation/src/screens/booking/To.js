/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import Place from '../../components/booking/Place';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';

const To = function ({navigation, route}) {
  const [toPlace, setSelectedToPlace] = useState();
  const next = () => {
    navigation.navigate('Date', {
      ...route.params,
      toPlace,
    });
  };
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View>
        <Text>{route.params.fromPlace}</Text>
        <Flight />
      </View>
      <Text>
        <Span text="to" />
      </Text>
      <Place place={toPlace} setSelectedPlace={setSelectedToPlace} />
      <ButtonForm onPress={next} text={<Span text="next" />} />
    </SafeAreaView>
  );
};

export default To;
