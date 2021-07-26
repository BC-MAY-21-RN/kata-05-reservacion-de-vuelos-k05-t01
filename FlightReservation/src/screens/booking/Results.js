/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';
import style from '../../consts/style';

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
      <View style={style.superior_passenegers_container}>
        <View style={style.upperLocationContainer}>
          <Text style={style.upperLocationTitle}>{route.params.fromPlace}</Text>
          <Flight name="flight" />
          <Text style={style.upperLocationTitle}>{route.params.toPlace}</Text>
        </View>
        <View style={style.dateContainer}>
          <Text style={style.dateTitle}>{startDate}</Text>
          <Text style={style.dateTitle}>{endDate}</Text>
          <Text style={style.dateTitle}>{route.params.passengers}</Text>
        </View>
      </View>
      <View style={style.resultsContainer}>
        <View style={style.bookingTitleContainer}>
          <Text style={style.resultsTitle}>
            <Span text="request" />
          </Text>
        </View>
      </View>
      <View style={style.codeContainer}>
        <Image
          style={style.imgCode}
          source={require('../../consts/img/code.png')}
        />
      </View>
      <View style={style.btnResults}>
        <ButtonForm onPress={next} text={<Span text="finish" />} />
      </View>
    </SafeAreaView>
  );
};

export default Results;
