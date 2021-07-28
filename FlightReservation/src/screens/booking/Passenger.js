/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Span from '../../consts/i18n/en';
import ButtonForm from '../../components/form/ButtonForm';
import ArrowBack from '../../components/booking/ArrowBack';
import Flight from '../../components/booking/Flight';
import List from '../../components/booking/ItemList';
import ListPassengers from '../../components/booking/consts/ListPassengers';
import style from '../../consts/style';

const Passenger = function ({navigation, route}) {
  const [passengers, setPassengers] = useState();
  const next = () => {
    navigation.navigate('Results', {
      ...route.params,
      passengers,
    });
  };
  const {startDate = new Date(startDate), endDate = new Date(endDate)} =
    route.params;
  return (
    <SafeAreaView>
      <ArrowBack navigation={navigation} />
      <View style={style.superior_content_container}>
        <View style={style.upperLocationContainer}>
          <Text style={style.upperLocationTitle}>{route.params.fromPlace}</Text>
          <Flight name="flight" />
          <Text style={style.upperLocationTitle}>{route.params.toPlace}</Text>
        </View>
        <View style={style.dateContainer}>
          <Text style={style.dateTitle}>{startDate}</Text>
          <Text style={style.dateTitle}>{endDate}</Text>
        </View>
        <View style={style.bookingTitleContainer}>
          <Flight name="people" />
          <Text style={style.bookingTitle}>
            <Span text="passenger" />
          </Text>
        </View>
      </View>
      <List
        list={ListPassengers}
        item={passengers}
        setSelectedItem={setPassengers}
      />
      <View style={style.btnPasseneger}>
        <ButtonForm onPress={next} text={<Span text="next" />} />
      </View>
    </SafeAreaView>
  );
};

export default Passenger;
