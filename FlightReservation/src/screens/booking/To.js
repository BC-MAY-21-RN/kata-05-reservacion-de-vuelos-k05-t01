/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import Place from '../../components/booking/Place';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';

const To = function ({navigation, route}) {
  console.log(route);
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View>
        <Text>COL</Text>
        <Flight />
      </View>
      <Text>
        <Span text="to" />
      </Text>
      <Place />
      <ButtonForm text={<Span text="next" />} />
      <Text
        onPress={() => {
          navigation.navigate('Date');
        }}>
        <Span text="next" />
      </Text>
    </SafeAreaView>
  );
};

export default To;
