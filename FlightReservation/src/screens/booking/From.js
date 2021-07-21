/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import Place from '../../components/booking/Place';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';

const From = function ({navigation, route}) {
  const [fromPlace, setSelectedFromPlace] = useState();
  const next = () => {
    navigation.navigate('To', {
      ...route.params,
      fromPlace,
    });
  };
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <Text>
        <Span text="from" />
      </Text>
      <Place
        fromPlace={fromPlace}
        setSelectedFromPlace={setSelectedFromPlace}
      />
      <ButtonForm onPress={next} text={<Span text="next" />} />
      <Text
        onPress={() => {
          navigation.navigate('To');
        }}>
        <Span text="next" />
      </Text>
    </SafeAreaView>
  );
};

export default From;
